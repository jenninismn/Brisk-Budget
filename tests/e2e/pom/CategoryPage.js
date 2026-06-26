import { expect } from '@playwright/test';

export class CategoryPage {
  constructor(page) {
    this.page = page;
    this.addCategoryBtn = this.page.locator('#addCategoryBtn');
    this.modal = this.page.locator('#categoryEditModal');
    this.nameInput = this.page.locator('#categoryEditName');
    this.emojiInput = this.page.locator('#categoryEditEmoji');
    this.saveButton = this.page.getByRole('button', { name: /save|speichern/i });
  }

  async addCategory(name, emoji) {
    const responsePromise = this.page.waitForResponse(response => 
      response.url().includes('/categories') && response.request().method() === 'POST'
    );  

    await this.addCategoryBtn.click();
    await expect(this.modal).toBeVisible(); 
    await this.nameInput.fill(name);
    await this.emojiInput.fill(emoji);
    await this.saveButton.click();

    const response = await responsePromise;

    expect(response.status()).toBe(201);
    expect(response.ok()).toBeTruthy();

    return response;
  }

  async expectCategoryExists(name) {
    const category = this.page.locator('.category-name-text', {
      hasText: name
    }).first();

    await expect(category).toBeVisible();
  }

  getCategoryGroup(name) {
    return this.page.locator('.category-group').filter({
      has: this.page.locator('.category-name-text', { hasText: name })
    }).first();
  }

  async editCategory(currentName, newName, newEmoji) {
    const categoryGroup = this.getCategoryGroup(currentName);
    const responsePromise = this.page.waitForResponse(response =>
      response.url().includes('/api/categories/') &&
      response.request().method() === 'PUT'
    );

    await categoryGroup.locator('.category-header .btn-edit').click();
    await expect(this.modal).toBeVisible();
    await this.nameInput.fill(newName);
    await this.emojiInput.fill(newEmoji);
    await this.saveButton.click();

    return responsePromise;
  }

  async addSubcategory(categoryName, subcategoryName) {
    const categoryGroup = this.getCategoryGroup(categoryName);
    const responsePromise = this.page.waitForResponse(response =>
      response.url().includes('/subcategories') &&
      response.request().method() === 'POST'
    );

    await categoryGroup.locator('.category-header .btn-add-sub').click();
    await expect(this.modal).toBeVisible();
    await this.nameInput.fill(subcategoryName);
    await this.saveButton.click();

    return responsePromise;
  }

  async expectSubcategoryExists(categoryName, subcategoryName) {
    const categoryGroup = this.getCategoryGroup(categoryName);
    await expect(
      categoryGroup.locator('.subcategory-name-text', {
        hasText: subcategoryName
      })
    ).toBeVisible();
  }
}
