class Products {

    constructor(page) {

        this.page = page;
        this.product = page.locator('div:nth-child(6) > .product-image-wrapper > .choose > .nav > li > a');
    }

    async navigateToProductDetailsPage() {

        await this.product.click();
    }
}

export { Products }
