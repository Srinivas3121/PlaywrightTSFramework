import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {

    private checkoutButton: Locator;
    private firstNameTextBox: Locator;
    private lastNameTextBox: Locator;
    private postalCodeTextBox: Locator;
    private continueButton: Locator;
    private overviewTitle: Locator;
    private finishButton: Locator;
    private completeHeader: Locator;
    private completeText: Locator;

    constructor(private page: Page) {

        this.checkoutButton = page.getByTestId('checkout');

        this.firstNameTextBox = page.getByTestId('firstName');

        this.lastNameTextBox = page.getByTestId('lastName');

        this.postalCodeTextBox = page.getByTestId('postalCode');

        this.continueButton = page.getByTestId('continue');

        this.overviewTitle = page.getByTestId('title');

        this.finishButton = page.getByTestId('finish');

        this.completeHeader = page.getByTestId('complete-header');

        this.completeText = page.getByTestId('complete-text');
    }

    async clickCheckout() {

        await this.checkoutButton.click();

    }

    async enterCustomerInformation(
        firstName: string,
        lastName: string,
        postalCode: string
    ) {

        await this.firstNameTextBox.fill(firstName);

        await this.lastNameTextBox.fill(lastName);

        await this.postalCodeTextBox.fill(postalCode);

    }

    async clickContinue() {

        await this.continueButton.click();

    }

    async verifyCheckoutOverviewPage() {

        await expect(this.overviewTitle)
            .toHaveText('Checkout: Overview');

    }

    async clickFinish() {

        await this.finishButton.click();

    }

    async verifyOrderCompleted() {

        await expect(this.completeHeader)
            .toHaveText('Thank you for your order!');

        await expect(this.completeText)
            .toContainText('Your order has been dispatched');

    }

}