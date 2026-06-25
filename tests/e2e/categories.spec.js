import { test, expect } from '@playwright/test';
import { CategoryPage } from './pom/CategoryPage';
import { SettingsPage } from './pom/SettingsPage';
import { AppPage } from './pom/AppPage';

test('User kann eine neue Kategorie erstellen', async ({ page }) => {
  const app = new AppPage(page);
  const settings = new SettingsPage(page);
  const categoryPage = new CategoryPage(page);

  await app.goto();
  await app.openMobileMenuIfNeeded();
  
  await settings.openCategoriesTab();
  
  const response = await categoryPage.addCategory('Uni Projekt', '🎓');
  
  expect(response.ok()).toBeTruthy();
  
  await categoryPage.expectCategoryExists('Uni Projekt');
});