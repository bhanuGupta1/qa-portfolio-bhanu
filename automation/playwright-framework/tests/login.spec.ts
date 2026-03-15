import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import testData from '../fixtures/testData.json';

test.describe('Login Tests', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    await loginPage.goto();
  });

  test('TC-01: Valid login redirects to inventory', async () => {
    const { username, password } = testData.users.standard;
    await loginPage.login(username, password);
    await inventoryPage.expectLoaded();
  });

  test('TC-02: Locked out user gets error', async () => {
    const { username, password } = testData.users.locked;
    await loginPage.login(username, password);
    await loginPage.expectError('locked out');
  });

  test('TC-03: Invalid credentials show error', async () => {
    const { username, password } = testData.users.invalid;
    await loginPage.login(username, password);
    await loginPage.expectError('Username and password do not match');
  });

  test('TC-04: Empty username shows error', async () => {
    await loginPage.login('', 'secret_sauce');
    await loginPage.expectError('Username is required');
  });

  test('TC-05: Empty password shows error', async () => {
    await loginPage.login('standard_user', '');
    await loginPage.expectError('Password is required');
  });

  test('TC-06: Empty fields show error', async () => {
    await loginPage.login('', '');
    await loginPage.expectError('Username is required');
  });

  test('TC-07: Error message can be dismissed', async () => {
    await loginPage.login('', '');
    await loginPage.expectError('Username is required');
    await loginPage.dismissError();
  });
});
