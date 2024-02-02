class LoginPage {

    constructor(page) {

        this.page = page;
        this.emailAddress = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
        this.password = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.heading = page.locator('div.login-form>h2');
        this.loginError = page.locator("form>p[style='color: red;']");
    }

    async login(emailId, password) {

        await this.emailAddress.fill(emailId);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}

export { LoginPage };
