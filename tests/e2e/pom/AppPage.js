import { expect } from '@playwright/test';

export class AppPage {
  constructor(page) {
    this.page = page;
    this.mobileMenuBtn = this.page.locator('#mobileMenuBtn');
  }

  async goto() {
    const response = await this.page.goto('/');

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
