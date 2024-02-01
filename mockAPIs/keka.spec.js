import { test, expect } from '@playwright/test';

test('Login', async ({ page }) => {

    await page.goto('https://paltech.keka.com/');
    await page.getByRole('button', { name: 'Google' }).click();
    await page.getByLabel('Email or phone').fill('praveen.ponduru@pal.tech');
    await page.getByLabel('Email or phone').fill('');

    await page.getByRole('link', { name: ' Me' }).hover();
    await page.getByRole('link', { name: 'Leave' }).click();
})