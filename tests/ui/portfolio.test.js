const { test, expect } = require('@playwright/test');

test('Portfolio page loads and displays hero name', async ({ page }) => {
    // Go to index.html using the local file path as a reference for tests
    // Note: in CI, this would be served or accessed via path
    await page.goto('file://' + process.cwd() + '/index.html');

    // Expect the page title to contain Himanshu
    await expect(page).toHaveTitle(/Himanshu/);

    // Expect hero name to be Himanshu
    const heroName = page.locator('.hero-name');
    await expect(heroName).toHaveText('Himanshu');
});

test('Navbar links exist and are visible', async ({ page }) => {
    await page.goto('file://' + process.cwd() + '/index.html');
    const navLinks = page.locator('.nav-links');
    await expect(navLinks).toBeVisible();
});

test('Skills cards displayed for key technologies', async ({ page }) => {
    await page.goto('file://' + process.cwd() + '/index.html');
    const flutterCard = page.locator('.skill-card[data-color="flutter"]');
    await expect(flutterCard).toBeVisible();
    await expect(flutterCard).toContainText('Flutter');
});
