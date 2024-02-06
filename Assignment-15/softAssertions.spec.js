import { test, expect } from '@playwright/test';

test("Login to Orange HRMS", async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await expect.soft(page.getByRole('heading')).toContainText('Login');
    await expect.soft(page.locator('form')).toContainText('Username');
    await expect.soft(page.locator('form')).toContainText('Password');

    await page.locator("[name='username']").fill('Admin');
    await page.locator("[name='password']").fill('admin123');
    await page.locator("[type='submit']").click();

    await expect(page.locator("div.oxd-topbar-header-title > span > h6")).toHaveText('Dashboard');
})
