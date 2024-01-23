import { test, expect } from '@playwright/test';

test("Check visibility of all the fields in Registration page", async ({ page }) => {

    await page.goto('https://demoqa.com/automation-practice-form');
    const firstName = page.locator('input#firstName');
    await expect.soft(firstName).toBeVisible();

    const lastName = page.locator('input#lastName');
    await expect.soft(lastName).toBeVisible();

    const email = page.locator('input#userEmail');
    await expect.soft(lastName).toBeVisible();

    const maleGender = page.locator('input#gender-radio-1');
    await expect.soft(maleGender).toBeVisible();

    const femaleGender = page.locator('input#gender-radio-2');
    await expect.soft(femaleGender).toBeVisible();

    const otherGender = page.locator('input#gender-radio-3');
    await expect.soft(otherGender).toBeVisible();

    const mobile = page.locator('input#userNumber');
    await expect.soft(mobile).toBeVisible();

    const dob = page.locator('input#dateOfBirthInput');
    await expect.soft(dob).toBeVisible();

    const subjects = page.locator('div#subjectsContainer');
    await expect.soft(subjects).toBeVisible();

    const sportsCheckbox = page.locator('hobbies-checkbox-1');
    await expect.soft(sportsCheckbox).toBeVisible();

    const readingCheckbox = page.locator('hobbies-checkbox-2');
    await expect.soft(readingCheckbox).toBeVisible();

    const musicCheckbox = page.locator('hobbies-checkbox-3');
    await expect.soft(musicCheckbox).toBeVisible();

    const uploadPicture = page.locator('uploadPicture');
    await expect.soft(uploadPicture).toBeVisible();

    const currentAddress = page.locator('textarea#currentAddress');
    await expect.soft(currentAddress).toBeVisible();

    const stateDropdown = page.locator('div#state');
    await expect.soft(stateDropdown).toBeVisible();

})
