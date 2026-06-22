import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import loginUsers from '../test-data/LoginUsers.json';

for (const user of loginUsers) {

    test(`Login with ${user.username}`, async ({ page }) => {

        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        await loginPage.navigateToLoginPage();

        await loginPage.login(
            user.username,
            user.password
        );

        await inventoryPage.verifyInventoryPageLoaded();

    });

}