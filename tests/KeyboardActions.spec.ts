import { test } from '@playwright/test';
import { KeyboardActionsPage } from '../pages/KeyboardActionsPage';

test.describe('Keyboard Actions', () => {

    let keyboardPage: KeyboardActionsPage;

    test.beforeEach(async ({ page }) => {
        keyboardPage = new KeyboardActionsPage(page);
        await keyboardPage.navigate();
    });

    test('Press TAB', async () => {
        await keyboardPage.enterName('Srinivas');
        await keyboardPage.pressTab();
        await keyboardPage.verifyEmailFocused();
    });

    test('Press Enter', async () => {
        await keyboardPage.searchWikipedia('Playwright');
    });

    test('Clear Text Using Keyboard', async () => {
        await keyboardPage.clearNameUsingKeyboard();
        await keyboardPage.verifyNameTextboxEmpty();
    });

    test('Copy And Paste Using Keyboard', async () => {
        await keyboardPage.copyAndPasteUsingKeyboard();
        await keyboardPage.verifyCopiedText();
    });
});