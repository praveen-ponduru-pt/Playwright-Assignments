import { test, expect } from '@playwright/test';

test.only("Open Playwright official website", async ({ page }) => {
    await page.goto("https://playwright.dev/");

    await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');

    await page.locator('.getStarted_Sjon').click();
    await expect(page).toHaveTitle('Installation | Playwright');
});
