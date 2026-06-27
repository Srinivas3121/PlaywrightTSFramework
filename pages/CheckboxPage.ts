import { Page, expect } from '@playwright/test';

export class CheckboxPage {
    constructor(private page: Page) {
    }

    async navigate() {
        await this.page.goto(
            'https://testautomationpractice.blogspot.com/'
        );
    }

    async selectDay(day: string) {
        await this.page.locator(`#${day.toLowerCase()}`).check();
    }

    async verifyDaySelected(day: string) {
        await expect(this.page.locator(`#${day.toLowerCase()}`)).toBeChecked();
    }

    async selectDays(days: string[]) {
        for (const day of days) {
            await this.page.locator(`#${day.toLowerCase()}`).check();
        }
    }

    async verifyDaysSelected(days: string[]) {
        for (const day of days) {
            await expect(this.page.locator(`#${day.toLowerCase()}`)).toBeChecked();
        }
    }
}