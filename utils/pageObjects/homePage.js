class HomePage {

    constructor(page) {

        this.page = page;
        this.loginMenu = page.getByRole('link', { name: ' Signup / Login' });
        this.loggedInMessage = page.locator('i.fa-user');
        this.deleteAccountButton = page.getByRole('link', { name: ' Delete Account' });
        this.deleteSuccessMessage = page.getByText('Account Deleted!');
        this.logoutButton = page.locator('ul.nav > li > a').filter({ hasText: 'Logout' });
        this.contactUsMenu = page.getByRole('link', { name: ' Contact us' });
        this.productsMenu = page.locator('ul.nav > li > a').filter({ hasText: 'Products' }); //getByRole('link', { name: ' Products' });
        this.addToCartButton = page.locator('.features_items>div:nth-child(3)>div>div>div>a');
        this.cartMenu = page.getByRole('link', { name: ' Cart' });
        this.continueShoppingButton = page.locator('button.btn-block');
        this.continueButtonAfterDelete = page.getByRole('link', { name: 'Continue' });
    }

    async navigateToLoginPage() {

        await this.loginMenu.click();
    }

    async navigateToContactUsPage() {
        await this.contactUsMenu.click();
    }

    async navigateToProductsPage() {
        await this.productsMenu.click();
    }

    async deleteAccount() {

        await this.deleteAccountButton.click();
        await this.continueButtonAfterDelete.click();
    }

    async addProduct() {

        await this.addToCartButton.click();
    }

    async navigateToCartPage() {
        await this.cartMenu.click();
    }
}

export { HomePage }
