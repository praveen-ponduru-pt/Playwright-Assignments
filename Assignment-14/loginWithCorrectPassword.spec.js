import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://automationexercise.com/');

  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await expect(page.locator('#form')).toContainText('Login to your account');

  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('praveen.ponduru@test.com');
  await page.getByPlaceholder('Password').fill('Sh3rl@ck');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Delete Account' }).click();
  await expect(page.locator('b')).toContainText('Account Deleted!');
});
