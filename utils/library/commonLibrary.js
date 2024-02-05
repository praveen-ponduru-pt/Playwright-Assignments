import { LoginPage } from "../pageObjects/loginPage";
import { HomePage } from "../pageObjects/homePage";
import { SignUp } from "../pageObjects/signup";
import { userInfo } from '../constants.json';

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

    signUp: async (page) => {


        const homePage = new HomePage(page);
        await homePage.loginMenu.click();

        const signUpPage = new SignUp(page);
        await signUpPage.nameField.fill(userInfo.name);
        await signUpPage.emailField.fill(process.env.MYEMAIL);
        await signUpPage.signupButton.click();


        await signUpPage.mrTitle.click();
        await signUpPage.setPasswordField.fill(process.env.PASSWORD);

        await signUpPage.daysField.selectOption('26');
        await signUpPage.monthsField.selectOption('9');
        await signUpPage.yearsField.selectOption('1997');

        await signUpPage.firstName.fill(userInfo.AddressInfo.firstName);
        await signUpPage.lastName.fill(userInfo.AddressInfo.lastName);
        await signUpPage.addressField.fill(userInfo.AddressInfo.address);
        await signUpPage.countryField.selectOption('India');
        await signUpPage.stateField.fill(userInfo.AddressInfo.state);
        await signUpPage.cityField.fill(userInfo.AddressInfo.city);
        await signUpPage.zipcodeField.fill(userInfo.AddressInfo.zipcode);
        await signUpPage.mobileNumberField.fill(userInfo.AddressInfo.mobileNumber);

        await signUpPage.createAccountButton.click();
        await signUpPage.continueButton.click();
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
