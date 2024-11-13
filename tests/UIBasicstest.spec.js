const {test, expect} = require('@playwright/test')

// test('First Playwright test', async function(){

// });

test('Browser Context Playwright test', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://google.com");
    console.log(await page.title());
});

test('Page Playwright test', async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await expect(page).toHaveTitle(/LoginPage Practise | Rahul Shetty Academy/);

});

test.only('Locators in Playwright test', async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator('#username').fill("rahulshetty")
    await page.locator('[type="password"]').fill("learning")
    await page.locator("#signInBtn").click()
    console.log(await page.locator("[style*='block']").textContent())
    await expect(page.locator("[style*='block']")).toContainText('Incorrect')
});