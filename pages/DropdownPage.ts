import { Page, Locator, expect } from '@playwright/test';

export class DropdownPage {
    private countryDropdown: Locator;
    constructor(private page: Page) {
        this.countryDropdown = page.locator('#country');
    }

    async navigate() {
        await this.page.goto(
            'https://testautomationpractice.blogspot.com/'
        );
    }

    async selectCountry(country: string) {
        await this.countryDropdown.selectOption(country);
    }

    async verifyCountry(country: string) {
        await expect(this.countryDropdown).toHaveValue(country);
    }

}