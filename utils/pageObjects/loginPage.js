class LoginPage {

    constructor(page) {
        this.page = page;
        this.emailAddress = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
        this.password = getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }


}