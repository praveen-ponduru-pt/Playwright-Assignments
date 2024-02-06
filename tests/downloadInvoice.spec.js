import { test, expect } from '@playwright/test';
import { commonLibrary } from '../utils/library/commonLibrary';
import { HomePage } from '../utils/pageObjects/homePage';
import { Cart } from '../utils/pageObjects/cart';
import { SignUp } from '../utils/pageObjects/signup';
import { userInfo } from '../utils/constants.json';

test("Downloading Invoice After Purchase", async ({ page }) => {

    await commonLibrary.navigateToTheApplication(page);
    await expect.soft(page).toHaveTitle('Automation Exercise');

    const homePage = new HomePage(page);
    await homePage.addProduct();

    await homePage.continueShoppingButton.click();
    await homePage.navigateToCartPage();

    await expect.soft(page).toHaveTitle('Automation Exercise - Checkout');

    const cartPage = new Cart(page);
    await cartPage.continueToCheckout();

    await cartPage.registerButton.click();

    const signUpPage = new SignUp(page);
    await signUpPage.signUp(userInfo);

    await homePage.navigateToCartPage();
    await cartPage.proceedToCheckoutButton.click();

    await cartPage.placeOrder();
    await expect.soft(cartPage.orderConfirmationMessage).toBeVisible();

    const downloadPromise = page.waitForEvent('download');
    await cartPage.downloadInvoice.click();
    const download = await downloadPromise;

    // Wait for the download process to complete and save the downloaded file somewhere.
    await download.saveAs('C:/Users/praveen.ponduru/Downloads/playwright-downloads' + download.suggestedFilename());
    test.setTimeout(2000);

    await homePage.deleteAccount(page);
    // await expect.soft(homePage.deleteSuccessMessage).toBeVisible();
})
