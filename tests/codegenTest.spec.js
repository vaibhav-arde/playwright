
import { test, expect } from '@playwright/test';

test('Codegen Test 1', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByLabel('Search', { exact: true }).fill('flipkart');
  await page.goto('https://www.google.com/search?q=flipkart&sca_esv=65c129acfcfbd652&source=hp&ei=yRY3Z4KqC9iIvr0P4PqswQU&iflsig=AL9hbdgAAAAAZzck2a2ArWfH7MfZodfeFJ3aPg3Cfwdd&ved=0ahUKEwjCsr27hd6JAxVYhK8BHWA9K1gQ4dUDCA0&uact=5&oq=flipkart&gs_lp=Egdnd3Mtd2l6IghmbGlwa2FydDIOEC4YgAQYsQMY0QMYxwEyCBAAGIAEGLEDMggQABiABBixAzIFEAAYgAQyCBAAGIAEGLEDMggQABiABBixAzIIEAAYgAQYsQMyCBAAGIAEGLEDMgsQABiABBixAxiDATIIEAAYgAQYsQNI1cMBUIwJWPcTcAF4AJABAJgBmwGgAdEIqgEDMC44uAEDyAEA-AEBmAIJoALsCKgCCsICEBAuGAMY5QIY6gIYjAMYjwHCAhAQABgDGOUCGOoCGIwDGI8BwgIREC4YgAQYsQMY0QMYgwEYxwHCAg4QABiABBixAxiDARiKBcICCxAuGIAEGLEDGNQCmAMEkgcDMS44oAfKPQ&sclient=gws-wiz');
  await page.getByRole('link', { name: 'Flipkart Flipkart https://www.flipkart.com', exact: true }).click();
});


test('Codegen Test 2', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Free Access to InterviewQues/' }).click();
  const page1 = await page1Promise;
  await page1.getByText('Please email us at mentor@').click();
  await page.getByLabel('Username:').click();
  await page.getByLabel('Username:').fill('test');
  await page.locator('#login-row').click();
  await page.getByText('Incorrect username/password. Username: Password: Admin User Student Teacher').click();
  await expect(page.getByLabel('Username:')).toBeVisible();
  await expect(page.getByLabel('Password:')).toBeVisible();
  await expect(page.getByRole('combobox')).toBeVisible();
  await expect(page.getByText('User', { exact: true })).toBeVisible();
  await expect(page.locator('#login-form')).toContainText('Username:');
  await expect(page.locator('#login-form')).toContainText('Password:');
  await expect(page.getByRole('combobox')).toHaveValue('stud');
  await expect(page.getByLabel('Username:')).toHaveValue('test');
});