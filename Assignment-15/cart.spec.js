import { test, expect } from '@playwright/test';

test('Add products to carts', async ({ page }) => {

  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: ' Products' }).click();
  await page.locator('.overlay-content > .btn').first().click({ force: true });
  await page.getByRole('button', { name: 'Continue Shopping' }).click({ force: true });
  await page.locator("locator('.productinfo > .btn').first()").hover();
  await page.locator('div:nth-child(4) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click({ force: true });
  await page.getByRole('button', { name: 'Continue Shopping' }).click({ force: true });
  await page.getByRole('link', { name: ' Cart' }).click();
  await page.getByText('Rs.').nth(1).click();
});