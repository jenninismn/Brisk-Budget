import { expect } from '@playwright/test';

export class TransactionPage {
  constructor(page) {
    this.page = page;

    this.addBtn = this.page.locator('#addTransactionBtn');
    this.payee = this.page.locator('#transactionPayee');
    this.amount = this.page.locator('#transactionAmount');
    this.date = this.page.locator('#transactionDate');
    this.category = this.page.locator('#transactionCategory');
    this.description = this.page.locator('#transactionDescription');
    this.notes = this.page.locator('#transactionNotes');
    this.saveButton = this.page.getByRole('button', { name: /save|speichern/i });

    this.list = this.page.locator('.transactions-list');
  }

  async createTransaction(data) {
    const responsePromise = this.page.waitForResponse(response => 
      response.url().includes('/transaction') && response.request().method() === 'POST'
    );

    await this.addBtn.click();

    await this.payee.fill(data.payee);
    await this.amount.fill(data.amount);
    await this.date.fill(data.date);
    
    await this.category.selectOption({ index: 1 });

    await this.description.fill(data.description);
    await this.notes.fill(data.notes);

    await this.saveButton.click();

    const response = await responsePromise;

    expect(response.status()).toBe(201);
    expect(response.ok()).toBeTruthy();

    return response;
  }

  async expectTransactionExists(text) {
    await expect(this.list).toContainText(text, { timeout: 10000 });
  }
}