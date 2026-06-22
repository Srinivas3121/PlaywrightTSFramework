import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';

import loginData from '../test-data/LoginData.json';
import checkoutData from '../test-data/CheckoutData.json';

test.describe('Checkout Functionality', () => {

    test.beforeEach(async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigateToLoginPage();

        await loginPage.login(
            loginData.username,
            loginData.password
        );

    });

    test('Complete Checkout', async ({ page }) => {

        const inventoryPage = new InventoryPage(page);
        const checkoutPage = new CheckoutPage(page);

        await inventoryPage.addBackpackToCart();

        await inventoryPage.openCart();

        await checkoutPage.clickCheckout();

        await checkoutPage.enterCustomerInformation(
            checkoutData.firstName,
            checkoutData.lastName,
            checkoutData.postalCode
        );

        await checkoutPage.clickContinue();

        await checkoutPage.verifyCheckoutOverviewPage();

        await checkoutPage.clickFinish();

        await checkoutPage.verifyOrderCompleted();

    });

});