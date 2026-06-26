export class SettingsPage {
  constructor(page) {
    this.page = page;

    this.settingsBtn = this.page.locator('#settingsBtn');
    this.categoriesTab = this.page.locator('.settings-nav-item[data-tab="categories"]');
  }

  async openCategoriesTab() {
    await this.settingsBtn.click();
    await this.categoriesTab.click();
  }
}
