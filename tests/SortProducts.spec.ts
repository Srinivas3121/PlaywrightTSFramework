import { test } from '../fixtures/baseTest';
import loginData from '../test-data/LoginData.json';
import { LoginPage } from '../pages/LoginPage';

test.describe('Product Sorting', () => {

    test.beforeEach(async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigateToLoginPage();

        await loginPage.login(loginData.username, loginData.password);

    });

    test('Sort Products Low To High', async ({inventoryPage}) => {

        await inventoryPage.sortByLowToHigh();

        await inventoryPage.verifyProductsSortedLowToHigh();

    });
    
});