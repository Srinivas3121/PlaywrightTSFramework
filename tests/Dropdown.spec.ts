import { test } from '@playwright/test';
import { DropdownPage } from '../pages/DropdownPage';

test('Select Country', async ({ page }) => {
    const dropdownPage = new DropdownPage(page);
    await dropdownPage.navigate();
    await dropdownPage.selectCountry('india');
    await dropdownPage.verifyCountry('india');
});