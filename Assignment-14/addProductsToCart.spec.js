import { test, expect } from '@playwright/test';
import { commonMethods } from './commonMethods';

test.beforeEach('Register User before logging in', async ({ page }) => {

    await commonMethods.registerUser(page);
});


test('Add Products To Cart', async ({ page }) => {

    await page.goto('https://automationexercise.com/');
    await page.waitForLoadState();

    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await expect(page.locator('#form')).toContainText('Login to your account');

    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('praveen.ponduru@test.com');
    await page.getByPlaceholder('Password').fill('Sh3rl@ck');
    await page.getByRole('button', { name: 'Login' }).click();

    await page.locator('ul.nav > li > a').filter({ hasText: 'Products' }).click();
    let productPrices = [];

    const firstProduct = page.locator('div:nth-child(6) > .product-image-wrapper > div > div > a');
    const secondProduct = page.locator('div:nth-child(7) > .product-image-wrapper > div > div > a');

    let firstProductPrice = await page.locator('div:nth-child(6) > .product-image-wrapper > div > div > h2').textContent();
    let secondProductPrice = await page.locator('div:nth-child(7) > .product-image-wrapper > div > div > h2').textContent();

    await firstProduct.click();
    await page.getByRole('button', { name: 'Continue Shopping' }).click();

    await secondProduct.click();
    await page.getByRole('button', { name: 'Continue Shopping' }).click();
    await page.getByRole('link', { name: ' Cart' }).click();

    let firstProductPriceInCart = page.getByText('Rs.').first();
    let secongProductPriceInCart = page.getByText('Rs.').nth(2);

    await expect(firstProductPriceInCart).toHaveText(firstProductPrice);
    await expect(secongProductPriceInCart).toHaveText(secondProductPrice);

    let firstProductQuantity = page.locator('div.cart_info > table > tbody > tr:nth-child(1) > td.cart_quantity');
    let secondProductQuantity = page.locator('div.cart_info > table > tbody > tr:nth-child(2) > td.cart_quantity');


    await expect(firstProductQuantity).toHaveText('1');
    await expect(secondProductQuantity).toHaveText('1');
});
