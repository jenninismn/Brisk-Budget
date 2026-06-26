import { expect } from '@playwright/test';

export class AccountPage {
  constructor(page) {
    this.page = page;
    this.addButton = this.page.getByRole('button', { name: '+' });
    this.nameInput = this.page.getByLabel('Account Name'); // Passe das Label ggf. an deine App an
    this.saveButton = this.page.getByRole('button', { name: 'Save' });
  }

  async createAccount(name) {
    const responsePromise = this.page.waitForResponse(response => 
      response.request().method() === 'POST' && response.url().includes('/accounts')
    );

    await this.addButton.click();
    await this.nameInput.fill(name);
    await this.saveButton.click();

    const response = await responsePromise;
    expect(response.status()).toBe(201); // Erwartet 201 Created
    expect(response.ok()).toBeTruthy();

    return response;
  }
}