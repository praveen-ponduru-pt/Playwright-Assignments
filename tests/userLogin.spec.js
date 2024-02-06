import { test, expect } from '@playwright/test';
import { commonLibrary } from '../utils/library/commonLibrary';
import { HomePage } from '../utils/pageObjects/homePage';
import { LoginPage } from '../utils/pageObjects/loginPage';
import { SignUp } from '../utils/pageObjects/signup';
import { userInfo } from '../utils/constants.json';

test.beforeEach('Create a new user', async ({ page }) => {

    await commonLibrary.navigateToTheApplication(page);
    const homePage = new HomePage(page);
    await homePage.loginMenu.click();

    const signUpPage = new SignUp(page);
    await signUpPage.signUp(userInfo);
    await commonLibrary.logoutFromTheApplication(page);
})

test('User Login with correct email and password', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await expect.soft(loginPage.LoginHeading).toBeVisible();

    await loginPage.login(process.env.MYEMAIL, process.env.PASSWORD);
    // await expect.soft(homePage.loggedInMessage.innerText()).toContainText(headers.loggedInMessage);

    const homePage = new HomePage(page);
    await homePage.deleteAccount();
    // await expect.soft(homePage.deleteSuccessMessage).toHaveText(headers.deleteAccountMessage);
});
