import { Page } from '@playwright/test';

export class AlertPage {

    constructor(private page: Page) {

    }

    async navigate() {

        await this.page.goto(
            'https://testautomationpractice.blogspot.com/'
        );

    }

    async handleSimpleAlert() {

        this.page.on('dialog', async dialog => {

            console.log(dialog.message());

            await dialog.accept();

        });

        await this.page.locator('#alertBtn').click();

    }

}