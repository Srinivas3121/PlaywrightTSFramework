import { test, expect } from '@playwright/test';
import { MultipleTabsPage } from '../pages/MultipletabsPage';

test.describe('Multiple Tabs', () => {

    let multipleTabsPage: MultipleTabsPage;

    test.beforeEach(async ({ page }) => {
        multipleTabsPage = new MultipleTabsPage(page);
        await multipleTabsPage.navigate();
    });

    test('Open New Tab', async () => {
    const newPage = await multipleTabsPage.openNewTab();
    await expect(newPage).toHaveURL('https://www.pavantestingtools.com/');
    });
});