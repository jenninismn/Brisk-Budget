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

test('User kann eine bestehende Kategorie bearbeiten', async ({ page }) => {
  const app = new AppPage(page);
  const settings = new SettingsPage(page);
  const categoryPage = new CategoryPage(page);
  const originalName = 'Kategorie zum Bearbeiten';
  const editedName = 'Bearbeitete Kategorie';

  await app.goto();
  await app.openMobileMenuIfNeeded();
  await settings.openCategoriesTab();

  await categoryPage.addCategory(originalName, '📁');
  const response = await categoryPage.editCategory(originalName, editedName, '✏️');

  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();
  await categoryPage.expectCategoryExists(editedName);
});

test('User kann einer Kategorie eine Unterkategorie hinzufügen', async ({ page }) => {
  const app = new AppPage(page);
  const settings = new SettingsPage(page);
  const categoryPage = new CategoryPage(page);
  const categoryName = 'Hauptkategorie mit Unterkategorie';
  const subcategoryName = 'Neue Unterkategorie';

  await app.goto();
  await app.openMobileMenuIfNeeded();
  await settings.openCategoriesTab();

  await categoryPage.addCategory(categoryName, '📚');
  const response = await categoryPage.addSubcategory(categoryName, subcategoryName);

  expect(response.status()).toBe(201);
  expect(response.ok()).toBeTruthy();
  await categoryPage.expectSubcategoryExists(categoryName, subcategoryName);
});
