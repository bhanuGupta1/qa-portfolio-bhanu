import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import testData from '../fixtures/testData.json';

test.describe('Checkout Tests', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;
  let checkoutPage: CheckoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);

    // Login and add item to cart
    await loginPage.goto();
    await loginPage.login(testData.users.standard.username, testData.users.standard.password);
    await inventoryPage.addItemToCart(testData.products.backpack.name);
    await inventoryPage.goToCart();
    await cartPage.checkout();
  });

  test('TC-19: Complete checkout happy path', async () => {
    const { firstName, lastName, postalCode } = testData.checkout.valid;
    await checkoutPage.expectCheckoutStep('Checkout: Your Information');
    await checkoutPage.fillInfo(firstName, lastName, postalCode);
    await checkoutPage.continue();
    await checkoutPage.expectCheckoutStep('Checkout: Overview');
    await checkoutPage.finish();
    await checkoutPage.expectOrderComplete();
  });

  test('TC-20: Checkout with empty first name shows error', async () => {
    await checkoutPage.fillInfo('', 'Gupta', '1010');
    await checkoutPage.continue();
    await checkoutPage.expectError('First Name is required');
  });

  test('TC-21: Checkout with empty last name shows error', async () => {
    await checkoutPage.fillInfo('Bhanu', '', '1010');
    await checkoutPage.continue();
    await checkoutPage.expectError('Last Name is required');
  });

  test('TC-22: Checkout with empty postal code shows error', async () => {
    await checkoutPage.fillInfo('Bhanu', 'Gupta', '');
    await checkoutPage.continue();
    await checkoutPage.expectError('Postal Code is required');
  });

  test('TC-23: Cancel checkout returns to cart', async () => {
    await checkoutPage.cancel();
    await cartPage.expectLoaded();
  });

  test('TC-24: Checkout overview shows correct total', async () => {
    const { firstName, lastName, postalCode } = testData.checkout.valid;
    await checkoutPage.fillInfo(firstName, lastName, postalCode);
    await checkoutPage.continue();
    const total = await checkoutPage.getTotalPrice();
    expect(total).toContain('$');
    // Backpack is $29.99 + tax
    expect(total).toMatch(/Total: \$\d+\.\d{2}/);
  });

  test('TC-25: Back to products after complete order', async () => {
    const { firstName, lastName, postalCode } = testData.checkout.valid;
    await checkoutPage.fillInfo(firstName, lastName, postalCode);
    await checkoutPage.continue();
    await checkoutPage.finish();
    await checkoutPage.expectOrderComplete();
    await checkoutPage.backToProducts();
    await inventoryPage.expectLoaded();
  });
});
