class ContactUs {

    constructor(page) {

        this.page = page;
        this.heading = page.getByRole('heading', { name: 'Get In Touch' });
        this.nameField = page.getByPlaceholder('Name');
        this.emailField = page.getByPlaceholder('Email', { exact: true });
        this.subjectField = page.getByPlaceholder('Subject');
        this.messageField = page.getByPlaceholder('Your Message Here');
        this.chooseFileButton = page.locator('input[name="upload_file"]');
        this.submitButton = page.getByRole('button', { name: 'Submit' });
        this.successMessage = page.locator('#contact-page').getByText('Success! Your details have been submitted successfully');
        this.homeButton = page.getByRole('link', { name: ' Home' });
    }

    async submitForm(page, contactFormInfo) {

        await this.nameField.fill(contactFormInfo.name);
        await this.emailField.fill(contactFormInfo.emailID);
        await this.subjectField.fill(contactFormInfo.subject);
        await this.messageField.fill(contactFormInfo.message);
        await this.chooseFileButton.setInputFiles(contactFormInfo.filePath);

        page.on('dialog', dialog => dialog.accept());
        await this.submitButton.click();
    }
}

export { ContactUs }
