class ProductDetails {

    constructor(page) {

        this.page = page;
        this.reviewHeader = page.getByRole('link', { name: 'Write Your Review' });
        this.nameField = page.getByPlaceholder('Your Name');
        this.emailField = page.getByPlaceholder('Email Address', { exact: true });
        this.reviewField = page.getByPlaceholder('Add Review Here!');
        this.submitButton = page.getByRole('button', { name: 'Submit' });
        this.successMessage = page.locator('#review-section').getByText('Thank you for your review.');
    }

    async submitReview(reviewInfo) {

        await this.nameField.fill(reviewInfo.name);
        await this.emailField.fill(reviewInfo.emailID);
        await this.reviewField.fill(reviewInfo.review);

        await this.submitButton.click();
    }
}

export { ProductDetails }
