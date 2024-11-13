const {test, expect} = require('@playwright/test')

test.only('allTextContents wait mechanism in Playwright', async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/client/");
    const userEmail = await page.locator('#userEmail')
    const password = await page.locator('[type="password"]')
    const login = await page.locator("#login")
    // const messageBlock = await page.locator("[style*='block']")
    const productHeader = await page.locator(".card-body b")
    await userEmail.fill("vaibhav.arde@gmail.com")
    await password.fill("Admin@123")
    await login.click()
    
    // console.log(await productHeader.first().textContent())
    // console.log(await productHeader.nth(1).textContent())
    
    // await productHeader.first().waitFor({state : 'visible'})
    await page.waitForLoadState('networkidle')
    console.log(await productHeader.allTextContents())
});