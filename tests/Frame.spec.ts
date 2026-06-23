import { test } from '@playwright/test';
import { FramePage } from '../pages/FramePage';

test('Handle IFrame', async ({ page }) => {

    const framePage =
        new FramePage(page);

    await framePage.navigate();

    await framePage.verifyText();

});