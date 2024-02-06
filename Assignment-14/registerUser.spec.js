import { test, expect } from '@playwright/test';

test('Register User', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await page.getByPlaceholder('Name').fill('Praveen');
    await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('praveen.ponduru@test.com');
    await page.getByRole('button', { name: 'Signup' }).click();
    await page.getByLabel('Mr.').check();
    await page.getByLabel('Password *').click();
    await page.getByLabel('Password *').fill('Sh3rl@ck');
    await page.locator('#days').selectOption('26');
    await page.locator('#months').selectOption('9');
    await page.locator('#years').selectOption('1997');
    await page.getByLabel('Sign up for our newsletter!').check();
    await page.getByLabel('Receive special offers from').check();
    await page.getByLabel('First name *').fill('Praveen');
    await page.getByLabel('Last name *').fill('Kumar');
    await page.getByLabel('Company', { exact: true }).fill('PT');
    await page.getByLabel('Address * (Street address, P.').fill('Vizag');
    await page.getByLabel('Address 2').fill('Madhurawada');
    await page.getByLabel('State *').fill('Andhra Pradesh');
    await page.getByLabel('City *').fill('Visakhapatnam');
    await page.locator('#zipcode').fill('532150');
    await page.getByLabel('Mobile Number *').fill('9491808805');
    await page.getByRole('button', { name: 'Create Account' }).click();
    await expect(page.locator('b')).toContainText('Account Created!');
    await page.getByRole('link', { name: 'Continue' }).click();
    await page.frameLocator('iframe[name="aswift_4"]').frameLocator('iframe[name="ad_iframe"]').getByLabel('Close ad').click();
    await expect(page.locator('#header')).toContainText('Logged in as Praveen');
    await page.getByRole('link', { name: ' Delete Account' }).click();
    await expect(page.locator('b')).toContainText('Account Deleted!');
    await page.getByRole('link', { name: 'Continue' }).click();

    await expect();
});
