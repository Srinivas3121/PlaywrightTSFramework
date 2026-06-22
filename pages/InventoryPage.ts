import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {

    private pageTitle: Locator;
    private addBackpackButton: Locator;
    private cartBadge: Locator;
    private cartLink: Locator;
    private sortDropdown: Locator;
    private productPrices: Locator;
    private inventoryItems: Locator;

    constructor(private page: Page) {

        this.pageTitle = page.locator('.title');

        this.addBackpackButton = page.locator('#add-to-cart-sauce-labs-backpack');

        this.cartBadge = page.locator('.shopping_cart_badge');

        this.cartLink = page.locator('.shopping_cart_link');

        this.sortDropdown = page.getByRole('combobox');
        
        this.productPrices = page.locator('[data-test="inventory-item-price"]');

        this.inventoryItems = page.locator('.inventory_item');
    }

    async verifyInventoryPageLoaded() {

        await expect(this.pageTitle).toHaveText('Products');

    }

    async addBackpackToCart() {

        await this.addBackpackButton.click();

    }

    async verifyCartCount(count: number) {

        await expect(this.cartBadge).toHaveText(count.toString());
    }

    async openCart() {

    await this.cartLink.click();

    }

    async sortByLowToHigh() {

    await this.sortDropdown.selectOption('lohi');

    }

    async verifyProductsSortedLowToHigh() {

    const pricesText = await this.productPrices.allTextContents();

    const actualPrices = pricesText.map(price => Number(price.replace('$', '')));

    const expectedPrices = [...actualPrices].sort((a, b) => a - b);

    expect(actualPrices).toEqual(expectedPrices);
    
    }

    async verifyFirstProduct() {

    await expect(this.inventoryItems.first()).toContainText('Sauce Labs Backpack');

    }

    async verifyThirdProduct() {

    await expect(this.inventoryItems.nth(2)).toContainText('Sauce Labs Bolt T-Shirt');

    }

    async verifyLastProduct() {

    await expect(this.inventoryItems.last()).toContainText('Test.allTheThings()');

    }
}