import { expect } from "playwright/test";
import { LoginPage } from "./loginPage";

class SignUp {

    constructor(page) {

        this.page = page;

        this.nameField = page.getByPlaceholder('Name');
        this.emailField = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
        this.signupButton = page.getByRole('button', { name: 'Signup' });
        this.mrTitle = page.getByLabel('Mr.');
        this.setPasswordField = page.getByLabel('Password *');
        this.daysField = page.locator('#days');
        this.monthsField = page.locator('#months');
        this.yearsField = page.locator('#years');
        this.firstName = page.getByLabel('First name *');
        this.lastName = page.getByLabel('Last name *');
        this.addressField = page.getByLabel('Address * (Street address, P.');
        this.countryField = page.getByLabel('Country *');
        this.stateField = page.getByLabel('State *');
        this.cityField = page.getByLabel('City *');
        this.zipcodeField = page.locator('#zipcode');
        this.mobileNumberField = page.getByLabel('Mobile Number *');
        this.createAccountButton = page.getByRole('button', { name: 'Create Account' });
        this.successMessage = page.getByText('Account Created!');
        this.continueButton = page.getByRole('link', { name: 'Continue' });
        this.closeAdButton = page.locator('div#dismiss-button');
        this.emailExistsMessage = page.locator('div.signup-form>form').filter({ hasText: 'Email Address already exist!' });
    }

    async signUp(userInfo) {

        await this.nameField.fill(userInfo.name);
        await this.emailField.fill(process.env.MYEMAIL);
        await this.signupButton.click();

        const isErrorVisible = await this.emailExistsMessage.isVisible();

        if (isErrorVisible) {

            const loginPage = new LoginPage(this.page);
            loginPage.login(process.env.MYEMAIL, process.env.PASSWORD);
        }
        else {

            await this.mrTitle.click();
            await this.setPasswordField.fill(process.env.PASSWORD);

            await this.daysField.selectOption('26');
            await this.monthsField.selectOption('9');
            await this.yearsField.selectOption('1997');

            await this.firstName.fill(userInfo.AddressInfo.firstName);
            await this.lastName.fill(userInfo.AddressInfo.lastName);
            await this.addressField.fill(userInfo.AddressInfo.address);
            await this.countryField.selectOption('India');
            await this.stateField.fill(userInfo.AddressInfo.state);
            await this.cityField.fill(userInfo.AddressInfo.city);
            await this.zipcodeField.fill(userInfo.AddressInfo.zipcode);
            await this.mobileNumberField.fill(userInfo.AddressInfo.mobileNumber);
            await this.createAccountButton.click();

            await expect.soft(this.successMessage).toBeVisible();
            await this.continueButton.click();

        }
    }
}

export { SignUp }
