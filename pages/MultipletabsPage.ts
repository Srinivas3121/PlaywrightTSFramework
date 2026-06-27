import { Page, expect } from '@playwright/test';

export class MultipleTabsPage {
    constructor(private page: Page) {
    }

    async navigate() {
        await this.page.goto(
            'https://testautomationpractice.blogspot.com/'
        );
    }

    async openNewTab() {
        const pagePromise = this.page.waitForEvent('popup');
        await this.page.getByRole('button', { name: 'New Tab' }).click();
        return await pagePromise;
    }
}