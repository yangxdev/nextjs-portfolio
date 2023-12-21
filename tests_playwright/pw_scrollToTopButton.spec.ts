import { test, expect } from '@playwright/test';

test.describe('scroll button visibility', () => {
    test('scroll button not visible at start', async ({ page }) => {
        await page.evaluate(() => { window.scrollTo(0, 0); })
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('#scroll-to-top-button');
        const viewportHeight = await page.evaluate(() => { return window.innerHeight; });

        // verify that the button is not inside the screen at this moment
        const button = await page.$('#scroll-to-top-button');
        const buttonPosition = await button?.boundingBox();
        expect(buttonPosition?.y).toBeGreaterThan(viewportHeight);

        // check that it has class 'translate-y-52'
        const classAttribute = await button?.getAttribute('class');
        expect(classAttribute).toContain('translate-y-52');
    });

    test('scroll button visible after scrolling', async ({ page }) => {
        await page.evaluate(() => { window.scrollTo(0, 0); })
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('#scroll-to-top-button');
        const viewportHeight = await page.evaluate(() => { return window.innerHeight; });

        // scroll down to the bottom of the page
        await page.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });

        // verify that the button is inside the screen at this moment
        const button2 = await page.$('#scroll-to-top-button');
        const buttonPosition2 = await button2?.boundingBox();
        expect(buttonPosition2?.y).toBeLessThan(viewportHeight);

        // check that it has class 'translate-y-0'
        const classAttribute2 = await button2?.getAttribute('class');
        expect(classAttribute2).toContain('translate-y-0');
    });
});

test.describe('scroll button functionality', () => {
    test('scroll button scrolls to top', async ({ page }) => {
        await page.evaluate(() => { window.scrollTo(0, 0); })
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('#scroll-to-top-button');

        // scroll down to the bottom of the page
        await page.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });

        // context: the button scrolls only to the #Experience section when viewport's y is <= #Experience's y position, otherwise it scrolls to the top

        // verify that the button scrolls up to the #Experience section
        const button = await page.$('#scroll-to-top-button');

        const viewportY = await page.evaluate(() => { return window.scrollY; });

        // click the button, wait for the scroll to finish
        await button?.click();
        await page.waitForTimeout(1000);
        const viewportY2 = await page.evaluate(() => { return window.scrollY; });

        await button?.click();
        await page.waitForTimeout(1000);
        const viewportY3 = await page.evaluate(() => { return window.scrollY; });

        console.log(viewportY, viewportY2, viewportY3);

        expect(viewportY).toBeGreaterThan(viewportY2);
        expect(viewportY2).toBeGreaterThan(viewportY3);
    });
});