import { Page, test, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class InventoryPage extends BasePage {
  readonly sandwichButton = this.page.locator("[id='react-burger-menu-btn']");
  readonly allMenuButton = this.page.locator("[id='inventory_sidebar_link']");
  readonly allAbout = this.page.locator("[id='about_sidebar_link']");
  readonly logoutButton = this.page.locator("[id='logout_sidebar_link']");
  readonly resetAppButton = this.page.locator("[id='reset_sidebar_link']");
  readonly listOfCard = this.page.locator(".inventory_item");
  readonly cardTitle = this.page.locator(".inventory_item_name");
  constructor(page: Page) {
    super(page);
    this.url = "https://www.saucedemo.com/inventory.html";
  }

  async getCardList() {
    await this.getListOfelements(this.listOfCard);
  }

  async openCard(i: number) {
    test.step("Клик по title карточки товара", async () => {
      await this.cardTitle.nth(i).click();
    });
  }
}
