import { test } from '@playwright/test';
import { AlertPage } from '../pages/AlertPage';

test('Handle Simple Alert', async ({ page }) => {

    const alertPage = new AlertPage(page);

    await alertPage.navigate();

    await alertPage.handleSimpleAlert();

});