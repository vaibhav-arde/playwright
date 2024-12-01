import { test, expect } from '@playwright/test';

test('Basic Authentication Example', async ({ browser }) => {
    // Create a new browser context with HTTP credentials
    const context = await browser.newContext({
        httpCredentials: {
            username: 'admin',
            password: 'admin',
        },
    });

    // Create a new page within the context
    const page = await context.newPage();

    // Navigate to the page that requires basic authentication
    await page.goto('https://the-internet.herokuapp.com/basic_auth');

    // Verify the authentication worked
    const responseText = await page.textContent('body');
    expect(responseText).toContain('authenticated');
    // expect(responseText).toContain('Congratulations');

    // Close the context
    await context.close();
});
