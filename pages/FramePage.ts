import { Page, Locator, expect } from '@playwright/test';

export class FramePage {

    private editorFrame: Locator;

    constructor(private page: Page) {

        this.editorFrame = page.locator('#mce_0_ifr');

    }

    async navigate() {

        await this.page.goto('https://the-internet.herokuapp.com/iframe');

    }

    async enterText(text: string) {

        const frame = this.page.frameLocator('#mce_0_ifr');

        await frame.locator('body').fill(text);

    }

    async verifyText() {

    const frame = this.page.frameLocator('#mce_0_ifr');

    await expect(frame.locator('body')).toContainText('Your content goes here.');

}

}