import { test } from '@playwright/test';
import { userInfo } from './utils/constants.json';

test('Creating a user account for login', async ({ page }) => {

    await page.goto(process.env.APP_URL);
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await page.getByPlaceholder('Name').fill(userInfo.name);
    await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill(process.env.MYEMAIL);
    await page.getByRole('button', { name: 'Signup' }).click();


    await page.getByLabel('Mr.').click();
    await page.getByLabel('Password *').fill(process.env.PASSWORD);

    await page.locator('#days').selectOption('26');
    await page.locator('#months').selectOption('9');
    await page.locator('#years').selectOption('1997');

    await page.getByLabel('First name *').fill(userInfo.AddressInfo.firstName);
    await page.getByLabel('Last name *').fill(userInfo.AddressInfo.lastName);
    await page.getByLabel('Address * (Street address, P.').fill(userInfo.AddressInfo.address);
    await page.getByLabel('Country *').selectOption('India');
    await page.getByLabel('State *').fill(userInfo.AddressInfo.state);
    await page.getByLabel('City *').fill(userInfo.AddressInfo.city);
    await page.locator('#zipcode').fill(userInfo.AddressInfo.zipcode);
    await page.getByLabel('Mobile Number *').fill(userInfo.AddressInfo.mobileNumber);

    await page.getByRole('button', { name: 'Create Account' }).click();

    await page.getByRole('link', { name: 'Continue' }).click();
})