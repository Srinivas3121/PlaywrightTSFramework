import { Page, expect, Locator } from '@playwright/test';

export class AlertPage {
    private confirmResult: Locator;
    constructor(private page: Page) {
        this.confirmResult = page.locator('#demo');
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

    async acceptConfirmationAlert() {
        this.page.on('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.accept();
        });
        await this.page.locator('#confirmBtn').click();
    }

    async dismissConfirmationAlert() {
        this.page.on('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.dismiss();
        });
        await this.page.locator('#confirmBtn').click();
    }

    async handlePromptAlert() {
        this.page.on('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.accept('Srinivas');
        });
        await this.page.locator('#promptBtn').click();
    }

    async verifyPromptMessage() {
        await expect(this.confirmResult).toContainText('Srinivas');
    }
}