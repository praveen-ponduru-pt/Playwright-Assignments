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
        this.continueButton = page.getByRole('link', { name: 'Continue' });
    }
}

export { SignUp }
