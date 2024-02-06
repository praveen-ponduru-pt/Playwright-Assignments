import { test, expect } from '@playwright/test';

test("Check checkboxes and radio buttons", async ({ page }) => {

    await page.goto('https://www.hyrtutorials.com/p/basic-controls.html');
    // await page.waitForTimeout(20000);

    await page.locator('input#femalerb').check();
    await expect(page.locator('input#femalerb')).toBeChecked();

    await page.goto('hindichbx').click();
    await expect(page.locator('input#hindichbx')).toBeChecked();

    await page.goto('hindichbx').check();
    await expect(page.locator('input#hindichbx')).toBeChecked();
})