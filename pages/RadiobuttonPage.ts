import {Page, expect} from '@playwright/test';  

export class RadiobuttonPage {
    constructor(private page: Page) {
    }

    async navigate() {
        await this.page.goto('https://testautomationpractice.blogspot.com/');
    }

    async SelectGender(gender: string) {
        await this.page.locator(`#${gender.toLowerCase()}`).check();
    }

    async verifyGenderSelected(gender: string) {
        await expect(this.page.locator(`#${gender.toLowerCase()}`)).toBeChecked();  
    }
}
