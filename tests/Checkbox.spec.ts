import { test } from '@playwright/test';
import { CheckboxPage } from '../pages/CheckboxPage';

test.describe('Checkbox Functionality', () => {

    let checkboxPage: CheckboxPage;

    test.beforeEach(async ({ page }) => {
        checkboxPage = new CheckboxPage(page);
        await checkboxPage.navigate();
    });

    test('Select Sunday Checkbox', async () => {
        await checkboxPage.selectDay('Sunday');
        await checkboxPage.verifyDaySelected('Sunday');
    });

    test('Select Multiple Checkboxes', async () => {
        const days = ['Sunday','Tuesday','Friday'];
        await checkboxPage.selectDays(days);
        await checkboxPage.verifyDaysSelected(days);
    });
});