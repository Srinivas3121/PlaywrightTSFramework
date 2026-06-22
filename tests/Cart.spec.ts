import { test } from '../fixtures/baseTest';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import loginData from '../test-data/LoginData.json';

test.describe('Cart Functionality', () => {

    test.beforeEach(async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigateToLoginPage();

        await loginPage.login(loginData.username, loginData.password

        );
        
    });

    test('Add Backpack To Cart', async ({inventoryPage, cartPage}) => {

    await inventoryPage.addBackpackToCart();

    await inventoryPage.verifyCartCount(1);

    await inventoryPage.openCart();

    await cartPage.verifyBackpackPresent();

    });

    test('Remove Backpack From Cart', async ({inventoryPage, cartPage}) => {


        await inventoryPage.addBackpackToCart();

        await inventoryPage.openCart();

        await cartPage.removeBackpack();

        await cartPage.verifyBackpackNotPresent();

    });

});