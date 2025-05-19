import { test, expect } from '@playwright/test';
import { testConfig } from '../config/testConfig';
import { loginPageSelectors,loginData } from '../selectors/loginPage';


test('has title', async ({ page }) => {
  await page.goto(testConfig.baseUrl);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(testConfig.title);
});

test('login', async ({ page }) => {
  await page.goto(testConfig.baseUrl);

  // Click the get started link.
  await page.getByPlaceholder(loginPageSelectors.usernameInputPlaceholder).fill(loginData.username);
  await page.getByPlaceholder(loginPageSelectors.passwordInputPlaceholder).fill(loginData.password);
  await page.getByRole('button', { name: loginPageSelectors.loginButtonName }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.locator(loginPageSelectors.headerCss)).toBeVisible();
});
