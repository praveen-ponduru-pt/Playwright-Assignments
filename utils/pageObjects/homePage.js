class HomePage {

    constructor(page) {

        this.page = page;
        this.loginMenu = page.getByRole('link', { name: ' Signup / Login' });
        this.loggedInMessage = page.locator('i.fa-user');
        this.deleteAccountButton = page.getByRole('link', { name: ' Delete Account' });
        this.deleteSuccessMessage = page.locator('h2.title');
    }

    async navigateToLoginPage(page) {

        await this.loginMenu.click();
    }

    async deleteAccount(page) {

        await this.deleteAccountButton.click();

    }
}

export { HomePage }
