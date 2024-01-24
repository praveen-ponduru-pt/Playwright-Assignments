import { test, expect } from '@playwright/test';

test("Navigation to PIM module", async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator("[name='username']").fill('Admin');
    await page.locator("[name='password']").fill('admin123');
    await page.locator("[type='submit']").click();

    page.getByRole('link', { name: 'PIM' })

    await expect(page.locator("div.oxd-topbar-header-title > span > h6")).toHaveText('Dashboard');
})