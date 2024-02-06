import { test } from '@playwright/test'

test("css and xpath selectors of textboxes", async ({ page }) => {


    page.goto('https://demoqa.com/text-box');

    //css selectors for Textbox

    fullName = page.locator("input[placeholder='Full Name']");
    email = page.locator('input#userEmail');
    currentAddress = page.locator('textarea#currentAddress');
    permanantAddress = page.locator('textarea#permanentAddress');

    //xpath selectors for Textbox

    fullName = page.locator("//input[@id='userName']");
    email = page.locator("//input[@id='userEmail']");
    currentAddress = page.locator("//textarea[@id='currentAddress']");
    permanantAddress = page.locator("//textarea[@id='permanentAddress']");
});

//checkboxes
test("css selectors of checkboxes", async ({ page }) => {


    await page.locator('label').filter({ hasText: 'Classified' }).getByRole('img').first().click();
    await page.locator('label').filter({ hasText: 'Veu' }).getByRole('img').first().click();
    await page.locator('label').filter({ hasText: 'Word File.doc' }).getByRole('img').first().click();
    await page.locator('label').filter({ hasText: 'Commands' }).getByRole('img').first().click();
})

//radio buttons
test("css selectors for radio buttons", async ({ page }) => {

    yesRadioButton = page.locator('input#yesRadio');
    impressiveRadioButton = page.locator('input#impressiveRadio');
    noRadioButton = page.locator('input#noRadio');
})

//buttons
test("css selectors for buttons", async ({ page }) => {

    doubleClickBtn = page.locator('button#doubleClickBtn');
    rightClickBtn = page.locator('button#rightClickBtn');
    clickMeBtn = page.locator('button#eCvZC');
})