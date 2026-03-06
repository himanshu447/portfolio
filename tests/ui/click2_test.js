const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  await page.goto('file:///Users/himanshu/.gemini/antigravity/playground/spectral-galaxy/index.html');
  
  const href = await page.evaluate(() => {
     let a = document.querySelector('.hero-socials a[title="LinkedIn"]');
     return a ? a.href : null;
  });
  console.log('HREF in DOM is:', href);
  
  await browser.close();
})();
