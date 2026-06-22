import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import loginData from '../test-data/LoginData.json';

test('Valid Login', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.verifyLoginButtonVisible();

    await loginPage.login(loginData.username,loginData.password);

    await inventoryPage.verifyInventoryPageLoaded();

    await inventoryPage.verifyFirstProduct();

    await inventoryPage.verifyThirdProduct();

    await inventoryPage.verifyLastProduct();
});