import { test, expect } from '@playwright/test';
import { WebTablePage } from '../pages/WebTablePage';

test.describe('Web Table', () => {

    let webTablePage: WebTablePage;

    test.beforeEach(async ({ page }) => {
        webTablePage = new WebTablePage(page);
        await webTablePage.navigate();
    });

    test('Get Row Count', async () => {
        const rowCount = await webTablePage.getRowCount();
        console.log('Row Count:', rowCount);
    });

    test('Get Column Count', async () => {
        const columnCount = await webTablePage.getColumnCount();
        console.log('Column Count:', columnCount);
    });

    test('Read Cell Value', async () => {
        const value = await webTablePage.getCellValue(4, 2);
        console.log(value);
    });
});