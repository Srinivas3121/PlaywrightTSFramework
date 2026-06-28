import { Page, Locator, expect } from '@playwright/test';

export class MouseActionsPage {

    private copyTextButton: Locator;
    private field2: Locator;
    private pointMeButton: Locator;
    private mobilesOption: Locator;
    private laptopsOption: Locator;
    private draggable: Locator;
    private droppable: Locator;

    constructor(private page: Page) {
        this.copyTextButton = page.locator('button[ondblclick="myFunction1()"]');
        this.field2 = page.locator('#field2');
        this.pointMeButton = page.getByRole('button', {name: "Point Me"});
        this.mobilesOption = page.getByRole('link', { name: 'Mobiles' });
        this.laptopsOption = page.getByRole('link', { name: 'Laptops' });
        this.draggable = page.locator('#draggable');
        this.droppable = page.locator('#droppable');
    }

    async navigate() {
        await this.page.goto('https://testautomationpractice.blogspot.com/');
    }

    async doubleClickCopyButton() {
        await this.copyTextButton.dblclick();
    }

    async verifyTextCopied() {
        await expect(this.field2).toHaveValue('Hello World!');
    }

    async hoverOverPointMe(){
        await this.pointMeButton.hover();
        await this.page.waitForTimeout(5000);
    }

    async VerifyMobilesAndLaptopsVisible(){
        await expect(this.mobilesOption).toBeVisible();
        await expect(this.laptopsOption).toBeVisible();
    }

    async dragAndDrop() {
        await this.draggable.dragTo(this.droppable);
    }
    
    async verifyDropped() {
        await expect(this.droppable).toHaveText('Dropped!');
    }
}