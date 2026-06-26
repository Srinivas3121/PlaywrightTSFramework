import { test } from '@playwright/test';
import { CheckboxPage } from '../pages/CheckboxPage';

test('Select Sunday Checkbox', async ({ page }) => {

    const checkboxPage = new CheckboxPage(page);
    await checkboxPage.navigate();
    await checkboxPage.selectDay('Sunday');
    await checkboxPage.verifyDaySelected('Sunday');
});

test('Select Multiple Checkboxes', async ({ page }) => {

    const checkboxPage = new CheckboxPage(page);

    await checkboxPage.navigate();

    const days = [
        'Sunday',
        'Tuesday',
        'Friday'
    ];

    await checkboxPage.selectDays(days);

    await checkboxPage.verifyDaysSelected(days);

});