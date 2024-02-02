import { test, expect } from '@playwright/test';
import { commonLibrary } from '../utils/library/commonLibrary';
import { HomePage } from '../utils/pageObjects/homePage';
import { LoginPage } from '../utils/pageObjects/loginPage';
import { headers } from '../utils/constants.json';

test('User Login with correct email and password', async ({ page }) => {

    await commonLibrary.navigateToTheApplication(page);
    await expect.soft(page).toHaveTitle('Automation Exercise');

    const homePage = new HomePage(page);
    await homePage.navigateToLoginPage(page);

    const loginPage = new LoginPage(page);
    // await expect.soft(loginPage.heading).toHaveText(headers.loginPage);

    await loginPage.login(process.env.MYEMAIL, process.env.PASSWORD);
    // await expect.soft(homePage.loggedInMessage.innerText()).toContainText(headers.loggedInMessage);

    await homePage.deleteAccount(page);
    // await expect.soft(homePage.deleteSuccessMessage).toHaveText(headers.deleteAccountMessage);

});