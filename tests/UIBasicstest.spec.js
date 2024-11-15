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

test('Locators in Playwright test', async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator('#username').fill("rahulshetty")
    await page.locator('[type="password"]').fill("learning")
    await page.locator("#signInBtn").click()
    console.log(await page.locator("[style*='block']").textContent())
    await expect(page.locator("[style*='block']")).toContainText('Incorrect')
});

test('Define locators in Playwright test', async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const username = page.locator('#username')
    const password = page.locator('[type="password"]')
    const signInBtn = page.locator("#signInBtn")
    const messageBlock = page.locator("[style*='block']")
    await username.fill("rahulshetty")
    await password.fill("learning")
    await signInBtn.click()
    console.log(await messageBlock.textContent())
    await expect(messageBlock).toContainText('Incorrect username/password.')
});

test('Handle multiple elements for single locator in Playwright test', async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const username = page.locator('#username')
    const password = page.locator('[type="password"]')
    const signInBtn = page.locator("#signInBtn")
    const messageBlock = page.locator("[style*='block']")
    const productHeader = page.locator(".card-body a")
    await username.fill("rahulshettyacademy")
    await password.fill("learning")
    await signInBtn.click()
    // console.log(await messageBlock.textContent())
    // await expect(messageBlock).toContainText('Incorrect username/password.')
    // console.log(await productHeader.first().textContent())
    // console.log(await productHeader.nth(1).textContent())
    console.log(await productHeader.allTextContents())
});

test('How wait mechanism work in Playwright', async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const username =  page.locator('#username')
    const password = page.locator('[type="password"]')
    const signInBtn = page.locator("#signInBtn")
    const messageBlock = page.locator("[style*='block']")
    const productHeader = page.locator(".card-body a")
    await username.fill("rahulshettyacademy")
    await password.fill("learning")
    await signInBtn.click()
    // console.log(await messageBlock.textContent())
    // await expect(messageBlock).toContainText('Incorrect username/password.')
    // console.log(await productHeader.first().textContent())
    // console.log(await productHeader.nth(1).textContent())
    console.log(await productHeader.allTextContents())
});

test('UI Controls in Playwright', async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const username = page.locator('#username')
    const password = page.locator('[type="password"]')
    const signInBtn = page.locator("#signInBtn")
    const messageBlock = page.locator("[style*='block']")
    const dropdown = page.locator("select.form-control")
    const userRadioBtn = page.locator("input[type=radio][value=user]")
    const checkbox = page.locator("#terms")
    await username.fill("rahulshetty")
    await password.fill("learning")
    await dropdown.selectOption("consult")
    // page.pause()
    await userRadioBtn.click()
    await expect(userRadioBtn).toBeChecked()
    expect(await checkbox.isChecked()).toBeFalsy()
    await checkbox.click()
    // await checkbox.click()
    expect(await checkbox.isChecked()).toBeTruthy()
    await page.waitForTimeout(2000)
    // await signInBtn.click()
    // console.log(await messageBlock.textContent())
    // await expect(messageBlock).toContainText('Incorrect username/password.')
});


test('Validate attribute in Playwright', async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("a[href*='documents-request']")

    await expect(documentLink).toHaveAttribute("class", "blinkingText");
});

test.only('handling child windows and new tabs in Playwright', async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("a[href*='documents-request']");

    await expect(documentLink).toHaveAttribute("class", "blinkingText");
    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        documentLink.click()
    ])

    const redText = await newPage.locator("p.red").textContent();
    const arrayText = redText.split("@")
    const domainName = arrayText[1].split(" ")[0]
    console.log("redText", redText);
    console.log("domainName", domainName);

});