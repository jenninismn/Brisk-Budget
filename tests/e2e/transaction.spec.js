import { test, expect } from '@playwright/test';
import { AppPage } from './pom/AppPage'; // Passe den Pfad zu deinen POM-Dateien an
import { TransactionPage } from './pom/TransactionPage';

test.describe('Transaction E2E Tests', () => {

  test('User can create a new transaction', async ({ page }) => {
    const app = new AppPage(page);
    const txPage = new TransactionPage(page);

    await app.goto();
    await app.openMobileMenuIfNeeded();
    
    await page.locator('.account-item').first().click();

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