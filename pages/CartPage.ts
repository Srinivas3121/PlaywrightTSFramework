import { Page, Locator, expect } from '@playwright/test';

export class CartPage {

    private backpackItem: Locator;
    private removeBackpackButton: Locator;

    constructor(private page: Page) {

        this.backpackItem = page.locator('[data-test="inventory-item-name"]');
        this.removeBackpackButton = page.locator('#remove-sauce-labs-backpack');
        this.backpackItem = page.locator('[data-test="inventory-item-name"]');
    }

    async verifyBackpackPresent() {

        await expect(this.backpackItem).toContainText('Sauce Labs Backpack');

    }

    async removeBackpack() {

    await this.removeBackpackButton.click();

    }

    async verifyBackpackNotPresent() {

    await expect(this.backpackItem).toHaveCount(0);
    }
}
