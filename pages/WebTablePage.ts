import { Page, Locator } from '@playwright/test';

export class WebTablePage {

    private tableRows: Locator;
    private tableColumns: Locator;

    constructor(private page: Page) {
        this.tableRows = page.locator('table[name="BookTable"] tbody tr');
        this.tableColumns = page.locator('table[name="BookTable"] tbody tr:first-child th');
    }

    async navigate() {
        await this.page.goto('https://testautomationpractice.blogspot.com/');
    }

    async getRowCount() {
        return await this.tableRows.count();
    }

    async getColumnCount() {
        return await this.tableColumns.count();
    }

    async getCellValue(row: number, column: number) {
        return await this.page.locator(`table[name="BookTable"] tbody tr:nth-child(${row}) td:nth-child(${column})`).textContent();
    }
}