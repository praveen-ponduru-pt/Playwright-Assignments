class HomePage {

    constructor(page) {

        this.page = page;
        this.loginButton = page.getByRole('link', { name: ' Signup / Login' });
    }
}