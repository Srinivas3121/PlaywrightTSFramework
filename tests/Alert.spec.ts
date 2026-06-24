import { test } from '@playwright/test';
import { AlertPage } from '../pages/AlertPage';

test('Handle Simple Alert', async ({ page }) => {
    const alertPage = new AlertPage(page);
    await alertPage.navigate();
    await alertPage.handleSimpleAlert();
});

test('Accept Confirmation Alert', async ({ page }) => {
    const alertPage = new AlertPage(page);
    await alertPage.navigate();
    await alertPage.acceptConfirmationAlert();
});

test('Dismiss Confirmation Alert', async ({ page }) => {
    const alertPage = new AlertPage(page);
    await alertPage.navigate();
    await alertPage.dismissConfirmationAlert();
});

test('Handle Prompt Alert', async ({ page }) => {
    const alertPage = new AlertPage(page);
    await alertPage.navigate();
    await alertPage.handlePromptAlert();
    await alertPage.verifyPromptMessage();
});