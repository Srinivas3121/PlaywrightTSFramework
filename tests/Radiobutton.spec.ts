import { test } from '@playwright/test';
import { RadiobuttonPage } from '../pages/RadiobuttonPage';

test.describe('Radiobutton Functionality', () => {

    let radiobuttonPage: RadiobuttonPage;
    test.beforeEach(async ({ page }) => {
        radiobuttonPage = new RadiobuttonPage(page);
        await radiobuttonPage.navigate();
    });

    test('Select Male Radiobutton', async () => {
        await radiobuttonPage.SelectGender('male');
        await radiobuttonPage.verifyGenderSelected('male');
    });

    test('Select Female Radiobutton', async () => {
        await radiobuttonPage.SelectGender('female');
        await radiobuttonPage.verifyGenderSelected('female');
    });
});