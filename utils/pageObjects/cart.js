class Cart {

    constructor(page) {
        this.page = page;
        this.proceedToCheckoutButton = page.getByText('Proceed To Checkout');
        this.registerButton = page.getByRole('link', { name: 'Register / Login' });
        this.commentField = page.locator('textarea[name="message"]');
        this.placeOrderButton = page.getByRole('link', { name: 'Place Order' });
        this.nameonCard = page.locator('input[name="name_on_card"]');
        this.cardNumebr = page.locator('input[name="card_number"]');
        this.cvv = page.getByPlaceholder('ex.');
        this.expMonth = page.getByPlaceholder('MM');
        this.expYear = page.getByPlaceholder('YYYY');
        this.confirmOrder = page.getByRole('button', { name: 'Pay and Confirm Order' });
        this.successMessage = page.getByText('Your order has been placed successfully!');
        this.orderConfirmationMessage = page.getByText('Congratulations! Your order');
        this.downloadInvoice = page.getByRole('link', { name: 'Download Invoice' });
        this.closeAdButton = page.locator('div#dismiss-button');
    }

    async continueToCheckout() {

        await this.proceedToCheckoutButton.click();
    }

    async placeOrder() {

        await this.commentField.fill('Test description.');
        await this.placeOrderButton.click();

        // const isAdVisible = await this.closeAdButton.isVisible({ timeout: 0 });
        // if (isAdVisible) {
        //     await this.closeAdButton.click();
        // }

        await this.nameonCard.fill('Praveen Kumar');
        await this.cardNumebr.fill('424242424242');
        await this.cvv.fill('123');
        await this.expMonth.fill('12');
        await this.expYear.fill('2025');
        await this.confirmOrder.click();
    }
}

export { Cart }
