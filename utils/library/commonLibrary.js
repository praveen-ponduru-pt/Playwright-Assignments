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

    async logoutFromTheApplication(page) {

        const homePage = new HomePage(page);
        await homePage.logoutButton.click();
    }
}

export { commonLibrary }
