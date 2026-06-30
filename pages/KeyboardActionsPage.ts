import { Page, Locator, expect } from '@playwright/test';

export class KeyboardActionsPage {

    private nameTextbox: Locator;
    private emailTextbox: Locator;
    private wikipediaSearch: Locator;

    constructor(private page: Page) {
        this.nameTextbox = page.locator('#name');
        this.emailTextbox = page.locator('#email');
        this.wikipediaSearch = page.locator('#Wikipedia1_wikipedia-search-input');
    }

    async navigate() {
        await this.page.goto('https://testautomationpractice.blogspot.com/');
    }

    async enterName(name: string) {
        await this.nameTextbox.fill(name);
    }

    async pressTab() {
        await this.nameTextbox.press('Tab');
    }

    async verifyEmailFocused() {
        await expect(this.emailTextbox).toBeFocused();
    }

    async searchWikipedia(text: string) {
        await this.wikipediaSearch.fill(text);
        await this.wikipediaSearch.press('Enter');
    }

    async clearNameUsingKeyboard() {
        await this.nameTextbox.fill('Srinivas');
        await this.page.keyboard.press('Control+A');
        await this.page.keyboard.press('Backspace');
    }

    async verifyNameTextboxEmpty() {
        await expect(this.nameTextbox).toHaveValue('');
    }

    async copyAndPasteUsingKeyboard() {
        await this.nameTextbox.fill('Playwright');
        await this.page.keyboard.press('Control+A');
        await this.page.keyboard.press('Control+C');
        await this.page.keyboard.press('Tab');
        await this.page.keyboard.press('Control+V');
    }

    async verifyCopiedText() {
        await expect(this.emailTextbox).toHaveValue('Playwright');
    }
}