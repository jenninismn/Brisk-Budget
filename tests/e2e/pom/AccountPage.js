import { expect } from '@playwright/test';

export class AccountPage {
  constructor(page) {
    this.page = page;
    this.addAccountBtn = this.page.locator('#addAccountBtn');
    this.modal = this.page.locator('#accountModal');
    this.nameInput = this.page.locator('#accountNameInput');
    this.typeInput = this.page.locator('#accountTypeInput');
    this.startingBalanceInput = this.page.locator('#startingBalanceInput');
    this.saveButton = this.modal.getByRole('button', { name: /save/i });
  }

  async createAccount(name, type = 'bank', startingBalance = '1000') {
    const responsePromise = this.page.waitForResponse(response =>
      response.url().includes('/api/accounts') &&
      response.request().method() === 'POST'
    );

    await this.addAccountBtn.click();
    await expect(this.modal).toBeVisible();
    await this.nameInput.fill(name);
    await this.typeInput.selectOption(type);
    await this.startingBalanceInput.fill(startingBalance);
    await this.saveButton.click();

    const response = await responsePromise;

    expect(response.status()).toBe(201);
    expect(response.ok()).toBeTruthy();

    await expect(this.page.locator('.account-item', { hasText: name })).toBeVisible();

    return response;
  }
}
