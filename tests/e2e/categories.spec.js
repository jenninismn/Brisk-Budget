import { test, expect } from '@playwright/test';

const APP_URL = 'http://localhost:3000'; 

test.describe('Category Management E2E Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(APP_URL);
  });

  test('User can create a new category from start to finish', async ({ page }) => {

    const mobileMenuBtn = page.locator('#mobileMenuBtn');
    if (await mobileMenuBtn.isVisible()) {
        await mobileMenuBtn.click();
    }

    await page.locator('#settingsBtn').click();

    await page.locator('.settings-nav-item[data-tab="categories"]').click();

    await page.locator('#addCategoryBtn').click();

    const modal = page.locator('#categoryEditModal');
    await expect(modal).toBeVisible();

    await page.locator('#categoryEditName').fill('E2E Test Kategorie');
    await page.locator('#categoryEditEmoji').fill('🚀');

    await page.getByRole('button', { name: /Save|Speichern/i }).click();

    const newCategoryElement = page.locator('.category-name-text', { hasText: 'E2E Test Kategorie' });
    await expect(newCategoryElement).toBeVisible();
  });

});