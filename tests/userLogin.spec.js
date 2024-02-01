import { test, expect } from '@playwright/test';

test('user Login', async ({ page }) => {

    await page.goto(process.env.APP_URL);
    await expect(page).toHaveTitle('Automation Exercise');
});