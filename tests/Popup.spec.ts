import { test, expect } from '@playwright/test';
import { PopupPage } from '../pages/PopupPage';

test('Handle New Tab', async ({ page }) => {

    const popupPage =
        new PopupPage(page);

    await popupPage.navigate();

    const newPage =
        await popupPage.openNewTab();

    await expect(newPage)
        .toHaveURL(/windows\/new/);

    await expect(
        newPage.getByText('New Window')
    ).toBeVisible();

});