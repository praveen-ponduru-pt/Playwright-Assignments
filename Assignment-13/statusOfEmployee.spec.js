import { test, expect } from '@playwright/test'

test("Get Status for the newly created user", async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator("input[name='username'").fill('Admin');
    await page.locator("input[name='password'").fill('admin123');
    await page.locator("button[type='submit'").click();
    await page.getByRole('textbox').nth(1).click();
    await page.getByRole('textbox').nth(1).fill('Admin');
    await page.getByRole('button', { name: 'Search' }).click();
    await expect(page.getByRole('cell', { name: 'Enabled' })).toHaveText('Enabled');

})