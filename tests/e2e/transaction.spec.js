import { test, expect } from '@playwright/test';
import { AppPage } from './pom/AppPage';
import { TransactionPage } from './pom/TransactionPage';
import { AccountPage } from './pom/AccountPage';

test.describe('Transaction E2E Tests', () => {

  test('User can create a new transaction', async ({ page }) => {
    const app = new AppPage(page);
    const txPage = new TransactionPage(page);
    const accPage = new AccountPage(page);

    await app.goto();
    await app.openMobileMenuIfNeeded();

    await accPage.createAccount('JennitestTwo');
    
    await page.locator('.account-item', { hasText: 'JennitestTwo' }).click();

    const response = await txPage.createTransaction({
      payee: 'Wocheneinkauf',
      amount: '45.50',
      date: '2026-06-25',
      description: 'Wocheneinkauf',
      notes: 'Test'
    });

    expect(response.status()).toBe(201);
    expect(response.ok()).toBeTruthy();

    await txPage.expectTransactionExists('Wocheneinkauf');
  });

});