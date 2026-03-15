import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import testData from '../fixtures/testData.json';

test.describe('Sorting Tests', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    await loginPage.goto();
    await loginPage.login(testData.users.standard.username, testData.users.standard.password);
    await inventoryPage.expectLoaded();
  });

  test('TC-26: Sort products by name A to Z', async () => {
    await inventoryPage.sortBy(testData.sortOptions.nameAZ);
    const names = await inventoryPage.getItemNames();
    const sorted = [...names].sort();
    expect(names).toEqual(sorted);
  });

  test('TC-27: Sort products by name Z to A', async () => {
    await inventoryPage.sortBy(testData.sortOptions.nameZA);
    const names = await inventoryPage.getItemNames();
    const sorted = [...names].sort().reverse();
    expect(names).toEqual(sorted);
  });

  test('TC-28: Sort products by price low to high', async () => {
    await inventoryPage.sortBy(testData.sortOptions.priceLowHigh);
    const prices = await inventoryPage.getItemPrices();
    expect(prices).toEqual(testData.expectedPriceOrder.lowToHigh);
  });

  test('TC-29: Sort products by price high to low', async () => {
    await inventoryPage.sortBy(testData.sortOptions.priceHighLow);
    const prices = await inventoryPage.getItemPrices();
    expect(prices).toEqual(testData.expectedPriceOrder.highToLow);
  });
});
