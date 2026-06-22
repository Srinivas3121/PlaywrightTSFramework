import { Page,expect, Locator } from '@playwright/test';

export class LoginPage {

    private usernameTextbox: Locator;
    private passwordTextbox: Locator;
    private loginButton: Locator;

    constructor(private page: Page) {

        this.usernameTextbox = page.locator('#user-name');

        this.passwordTextbox = page.locator('#password');

        this.loginButton = page.getByRole('button', { name: 'Login' })
    }

    async navigateToLoginPage() {

        await this.page.goto('/');

    }
    
    async verifyLoginButtonVisible() {

    await expect(this.loginButton).toBeVisible();

}

    async login(username: string, password: string) {

        await this.usernameTextbox.fill(username);

        await this.passwordTextbox.fill(password);

        await this.loginButton.click();
    }

}