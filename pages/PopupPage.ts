import { Page, expect } from '@playwright/test';

export class PopupPage {

    constructor(private page: Page) { }

    async navigate() {

        await this.page.goto('https://the-internet.herokuapp.com/windows');

    }

    async openNewTab() {

        const pagePromise = this.page.waitForEvent('popup');

        await this.page.getByText('Click Here').click();

        return await pagePromise;

    }

}