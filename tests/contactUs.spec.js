import { test, expect } from '@playwright/test';
import { commonLibrary } from '../utils/library/commonLibrary';
import { ContactUs } from '../utils/pageObjects/contactUs';
import { HomePage } from '../utils/pageObjects/homePage';
import { contactUsForm } from '../utils/constants.json';

test("Submit Contact Us Form", async ({ page }) => {

    await commonLibrary.navigateToTheApplication(page);
    await expect.soft(page).toHaveTitle('Automation Exercise');

    const homePage = new HomePage(page);
    await homePage.navigateToContactUsPage();

    const contactUsPage = new ContactUs(page);
    await expect.soft(contactUsPage.heading).toBeVisible();

    await contactUsPage.submitForm(page, contactUsForm);
    await expect.soft(contactUsPage.successMessage).toBeVisible();

    await contactUsPage.homeButton.click();
    await expect.soft(page).toHaveTitle('Automation Exercise');
})
