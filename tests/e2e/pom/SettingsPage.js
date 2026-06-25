export class SettingsPage {
  constructor(page) {
    this.page = page;

    this.settingsBtn = this.page.locator('#settingsBtn');
    this.categoriesTab = this.page.locator('.settings-nav-item[data-tab="categories"]');
  }

  openCategoriesTab() {
    this.settingsBtn.click();
    this.categoriesTab.click();
  }
}