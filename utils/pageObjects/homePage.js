class HomePage {

    constructor(page) {

        this.page = page;
        this.loginMenu = page.getByRole('link', { name: ' Signup / Login' });
        this.loggedInMessage = page.locator('i.fa-user');
        this.deleteAccountButton = page.getByRole('link', { name: ' Delete Account' });
        this.deleteSuccessMessage = page.locator('h2.title');
        this.logoutButton = page.getByRole('link', { name: ' Logout' });
        this.contactUsMenu = page.getByRole('link', { name: ' Contact us' });
    }

    async navigateToLoginPage(page) {

        await this.loginMenu.click();
    }

    async navigateToContactUsPage(page) {
        await this.contactUsMenu.click();
    }

    async deleteAccount(page) {

        await this.deleteAccountButton.click();

    }
}

export { HomePage }
