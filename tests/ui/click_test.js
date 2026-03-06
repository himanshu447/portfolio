const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));

  await page.goto('file:///Users/himanshu/.gemini/antigravity/playground/spectral-galaxy/index.html');
  
  // Try to find the linkedin link and click it
  const anchor = page.locator('.hero-socials a:has(svg.lucide-linkedin)');
  
  const href = await anchor.getAttribute('href');
  console.log('HREF is:', href);
  
  // We can't actually click and wait for new tab easily without a Promise.all, so let's do that
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    anchor.click()
  ]);
  
  console.log('New page URL:', newPage.url());
  
  await browser.close();
})();
