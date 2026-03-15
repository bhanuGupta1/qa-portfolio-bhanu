import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import testData from '../fixtures/testData.json';

test.describe('Inventory Tests', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    await loginPage.goto();
    await loginPage.login(testData.users.standard.username, testData.users.standard.password);
    await inventoryPage.expectLoaded();
  });

  test('TC-08: Inventory page displays 6 products', async () => {
    const count = await inventoryPage.getProductCount();
    expect(count).toBe(6);
  });

  test('TC-09: All products have names and prices', async () => {
    const names = await inventoryPage.getItemNames();
    const prices = await inventoryPage.getItemPrices();
    expect(names.length).toBe(6);
    expect(prices.length).toBe(6);
    names.forEach(name => expect(name.length).toBeGreaterThan(0));
    prices.forEach(price => expect(price).toBeGreaterThan(0));
  });

  test('TC-10: Logout returns to login page', async () => {
    await inventoryPage.logout();
    await loginPage.expectOnLoginPage();
  });

  test('TC-11: Direct inventory access without login redirects', async ({ browser }) => {
    // Fresh context with no cookies from the beforeEach login
    const context = await browser.newContext();
    const freshPage = await context.newPage();
    await freshPage.goto('https://www.saucedemo.com/inventory.html');
    const freshLoginPage = new LoginPage(freshPage);
    await freshLoginPage.expectError('You can only access');
    await context.close();
  });
});
