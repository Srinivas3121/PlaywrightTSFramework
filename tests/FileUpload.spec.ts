import { test } from '@playwright/test';
import { FileUploadPage } from '../pages/FileUploadPage';

test.describe('File Upload Functionality', () => {

    let fileUploadPage: FileUploadPage;

    test.beforeEach(async ({ page }) => {
        fileUploadPage = new FileUploadPage(page);
        await fileUploadPage.navigate();
    });

    test('Upload Single File', async () => {
        await fileUploadPage.uploadSingleFile();
        await fileUploadPage.verifySingleFileUploaded();
    });

    test('Upload Multiple Files', async () => {
        await fileUploadPage.uploadMultipleFiles();
    });
});