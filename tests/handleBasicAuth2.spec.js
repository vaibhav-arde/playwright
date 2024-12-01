import { test, expect, Browser, Page, Locator, BrowserContext } from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test('Basic auth test', async () => {
    // const browser: Browser = await firefox.launch({headless: false});
    const browser = await firefox.launch({ headless: false });
    // const context: BrowserContext await browser.newContext();
    const context = await browser.newContext();

    // const page: Page await context.newPage();
    const page = await context.newPage();

    const username = 'admin';
    const password = 'admin';

    //const authHeader = 'Basic + btoa (username+': '+password);
    page.setExtraHTTPHeaders({ Authorization: createAuthHeader(username, password) });

    await page.goto('https://the-internet.herokuapp.com/basic_auth');
})

function createAuthHeader(username, password) {
    return "Basic " + btoa(username + ":" + password)
}