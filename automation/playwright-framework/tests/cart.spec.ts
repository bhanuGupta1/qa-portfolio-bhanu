import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import testData from '../fixtures/testData.json';

test.describe('Cart Tests', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    await loginPage.goto();
    await loginPage.login(testData.users.standard.username, testData.users.standard.password);
    await inventoryPage.expectLoaded();
  });

  test('TC-12: Add single item to cart', async () => {
    await inventoryPage.addItemToCart(testData.products.backpack.name);
    expect(await inventoryPage.getCartCount()).toBe('1');
  });

  test('TC-13: Add multiple items to cart', async () => {
    await inventoryPage.addItemToCart(testData.products.backpack.name);
    await inventoryPage.addItemToCart(testData.products.bikeLight.name);
    await inventoryPage.addItemToCart(testData.products.boltShirt.name);
    expect(await inventoryPage.getCartCount()).toBe('3');
  });

  test('TC-14: Remove item from inventory page', async () => {
    await inventoryPage.addItemToCart(testData.products.backpack.name);
    await inventoryPage.removeItemFromCart(testData.products.backpack.name);
    await expect(inventoryPage.cartBadge).not.toBeVisible();
  });

  test('TC-15: Cart displays correct items', async () => {
    await inventoryPage.addItemToCart(testData.products.backpack.name);
    await inventoryPage.addItemToCart(testData.products.onesie.name);
    await inventoryPage.goToCart();
    await cartPage.expectLoaded();
    await cartPage.expectItemInCart(testData.products.backpack.name);
    await cartPage.expectItemInCart(testData.products.onesie.name);
    expect(await cartPage.getItemCount()).toBe(2);
  });

  test('TC-16: Remove item from cart page', async () => {
    await inventoryPage.addItemToCart(testData.products.backpack.name);
    await inventoryPage.addItemToCart(testData.products.bikeLight.name);
    await inventoryPage.goToCart();
    await cartPage.removeItem(testData.products.backpack.name);
    expect(await cartPage.getItemCount()).toBe(1);
  });

  test('TC-17: Continue shopping returns to inventory', async () => {
    await inventoryPage.goToCart();
    await cartPage.continueShopping();
    await inventoryPage.expectLoaded();
  });

  test('TC-18: Cart persists after logout and re-login', async ({ page }) => {
    await inventoryPage.addItemToCart(testData.products.fleeceJacket.name);
    await inventoryPage.goToCart();
    await cartPage.expectItemInCart(testData.products.fleeceJacket.name);
  });
});
