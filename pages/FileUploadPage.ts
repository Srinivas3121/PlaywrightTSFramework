import { Page, expect, Locator } from '@playwright/test';

export class FileUploadPage {
    private singleFileUpload: Locator;
    private multipleFileUpload: Locator;

    constructor(private page: Page) {
        this.singleFileUpload = page.locator('#singleFileInput');
        this.multipleFileUpload = page.locator('#multipleFilesInput');
    }

    async navigate() {
        await this.page.goto(
            'https://testautomationpractice.blogspot.com/'
        );
    }

    async uploadSingleFile() {
        await this.singleFileUpload.setInputFiles('test-data/sample1.txt');
    }

    async verifySingleFileUploaded() {
        await expect(this.singleFileUpload).toHaveValue(/sample1\.txt$/);
    }

    async uploadMultipleFiles() {
        await this.multipleFileUpload.setInputFiles([
        'test-data/sample1.txt','test-data/sample2.txt']);
    }
}
