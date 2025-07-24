import { test, expect } from '@playwright/test';

test('The user logs in successfully', async ({ page }) => {
  // Navigate to the login page
  await page.goto('http://the-internet.herokuapp.com/login');

  // Enter the valid username (tomsmith) into the username field
  await page.fill('#username', 'tomsmith');

  // Enter the valid password (SuperSecretPassword!) into the password field
  await page.fill('#password', 'SuperSecretPassword!');

  // Click the login button
  await page.click('button[type="submit"]');

  // The user is redirected to the secure area
  await expect(page).toHaveURL('http://the-internet.herokuapp.com/secure');
  await expect(page.locator('h4')).toHaveText('Welcome to the Secure Area. When you are done click logout below.');

  // The success message is displayed
  await expect(page.locator('div[id="flash-messages"]')).toContainText(' You logged into a secure area! ');

});