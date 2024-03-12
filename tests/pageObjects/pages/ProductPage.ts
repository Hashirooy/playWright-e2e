import { Page, test } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductPage extends BasePage {
  readonly productTitle = this.page.locator(
    '[class="inventory_details_name large_size"]'
  );
  readonly productDetails = this.page.locator(
    '[class="inventory_details_desc large_size"]'
  );
  readonly productPrice = this.page.locator(
    '[class="inventory_details_price"]'
  );
  readonly addToCardButton = this.page.locator(
    "[id='add-to-cart-sauce-labs-backpack']"
  );
  readonly backToProductButton = this.page.locator("[id='back-to-products']");
  constructor(page: Page) {
    super(page);
  }

  async ClickBackToProduct() {
    test.step("Нажатие на кнопку назад к продуктам", async () => {
      await this.backToProductButton.click();
    });
  }

  async ClickAddToCardButton() {
    test.step("Нажатие на кнопку Добавить товар", async () => {
      await this.addToCardButton.click();
    });
  }
}
