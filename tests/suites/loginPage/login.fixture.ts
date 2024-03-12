import { test as base } from "@playwright/test";
import { LoginPage } from "../../pageObjects/pages/LoginPage";

type TestFixtures = {
  loginPage: LoginPage;
};

export const test = base.extend<TestFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});
