import { test, expect } from '@playwright/test';
import { commonLibrary } from './utils/library/commonLibrary';
import { HomePage } from './utils/pageObjects/homePage';
import { LoginPage } from './utils/pageObjects/loginPage';

test('Deleting the user account', async ({ page }) => {

    await commonLibrary.navigateToTheApplication(page);

    const homePage = new HomePage(page);
    await homePage.navigateToLoginPage(page);

    const loginPage = new LoginPage(page);
    await loginPage.login(process.env.MYEMAIL, process.env.PASSWORD);

    const isLoginErrorVisible = await loginPage.loginError.isVisible();
    if (!isLoginErrorVisible) {

        await page.getByRole('link', { name: ' Delete Account' }).click();
        await page.getByRole('link', { name: 'Continue' }).click();
    }
    else
        await expect(loginPage.loginError).toBeVisible();
    //div#dismiss-button>div>svg
})