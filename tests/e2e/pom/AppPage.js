import { expect } from '@playwright/test';

export class AppPage {
  constructor(page) {
    this.page = page;
    this.mobileMenuBtn = this.page.locator('#mobileMenuBtn');
  }

  async goto() {
    const responsePromise = this.page.waitForResponse(response => 
      response.request().method() === 'GET' && response.url().includes('/transactions')
    );

    await this.page.goto('http://localhost:3000');

    const response = await responsePromise;

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    return response;
  }

  async openMobileMenuIfNeeded() {
    if (await this.mobileMenuBtn.isVisible()) {
      await this.mobileMenuBtn.click();
    }
  }
}