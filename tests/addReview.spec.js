import { test, expect } from '@playwright/test';
import { commonLibrary } from '../utils/library/commonLibrary';
import { HomePage } from '../utils/pageObjects/homePage';
import { Products } from '../utils/pageObjects/products';
import { ProductDetails } from '../utils/pageObjects/productDetails';
import { reviewInfo } from '../utils/constants.json';

test("Add Review to a Product", async ({ page }) => {

    await commonLibrary.navigateToTheApplication(page);
    await expect.soft(page).toHaveTitle('Automation Exercise');

    const homePage = new HomePage(page);
    await homePage.navigateToProductsPage();
    await expect.soft(page).toHaveTitle('Automation Exercise - All Products');

    const productsPage = new Products(page);
    await productsPage.navigateToProductDetailsPage();

    const productDetailsPage = new ProductDetails(page);
    await expect.soft(productDetailsPage.reviewHeader).toBeVisible();

    await productDetailsPage.submitReview(reviewInfo);
    await expect.soft(productDetailsPage.successMessage).toBeVisible();

})