import { test } from '@playwright/test';
import { MouseActionsPage } from '../pages/MouseActionsPage';

test.describe('Mouse Actions', () => {

    let mouseActionsPage: MouseActionsPage;

    test.beforeEach(async ({ page }) => {
        mouseActionsPage = new MouseActionsPage(page);
        await mouseActionsPage.navigate();
    });

    test('Double Click', async () => {
        await mouseActionsPage.doubleClickCopyButton();
        await mouseActionsPage.verifyTextCopied();
    });

    test('Hover Over Point Me', async () => {
        await mouseActionsPage.hoverOverPointMe();
        await mouseActionsPage.VerifyMobilesAndLaptopsVisible();
    });

    test('Drag And Drop', async () => {
        await mouseActionsPage.dragAndDrop();
        await mouseActionsPage.verifyDropped();
    });
});