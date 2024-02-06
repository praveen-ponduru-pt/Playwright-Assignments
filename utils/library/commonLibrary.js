import { LoginPage } from "../pageObjects/loginPage";
import { HomePage } from "../pageObjects/homePage";

const commonLibrary = {

    navigateToTheApplication: async (page) => {

        await page.goto(process.env.APP_URL);
    },

    loginToTheApplication: async (page) => {

        await commonLibrary.navigateToTheApplication(page);

        const homePage = new HomePage(page);
        await homePage.navigateToLoginPage(page);
        const loginPage = new LoginPage(page);
        loginPage.login(process.env.MYEMAIL, process.env.PASSWORD);
    },

    logoutFromTheApplication: async (page) => {

        const homePage = new HomePage(page);
        await homePage.logoutButton.click();
    },

    deleteAccount: async (page) => {

        await commonLibrary.navigateToTheApplication(page);

        const homePage = new HomePage(page);
        await homePage.navigateToLoginPage(page);

        const loginPage = new LoginPage(page);
        await loginPage.login(process.env.MYEMAIL, process.env.PASSWORD);

        await page.getByRole('link', { name: ' Delete Account' }).click();
        await page.getByRole('link', { name: 'Continue' }).click();
    }
}

export { commonLibrary }
