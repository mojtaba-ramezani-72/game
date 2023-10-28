import { test, expect } from '@playwright/test';

test('test login', async ({ page }) => {
  await page.goto('http://localhost:4200/login-page');
  await page.locator('[data-test="email"]').click();
  await page.locator('[data-test="email"]').fill('player@gmail.com');
  await page.locator('[data-test="email"]').press('Tab');
  await page.locator('[data-test="password"]').fill('player');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator('[data-test="login-btn"]').click();
});
