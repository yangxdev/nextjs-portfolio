import { test, expect } from '@playwright/test';
import { BrowserContext } from '@playwright/test';

test.describe('Header component test', () => {
    test('header is visible', async ({ page }) => {
        await page.goto('http://localhost:3000/');
        const isHeaderVisible = await page.isVisible('#Header');
        expect(isHeaderVisible).toBeTruthy();
    });

    test('header logo button scrolls to top', async ({ page }) => {
        await page.goto('http://localhost:3000/');
        const viewportYBefore = await page.evaluate(() => { return window.scrollY; });
        await page.evaluate(() => { window.scrollTo(0, document.body.scrollHeight); });
        await page.click('[data-testid="header-title"]');
        await page.waitForTimeout(1000);
        const viewportYAfter = await page.evaluate(() => { return window.scrollY; });
        expect(viewportYBefore).toEqual(viewportYAfter);
    });

    test('header linkedin click', async ({ page, context }) => {
        await page.goto('http://localhost:3000/');
        const linkedInButton = await page.waitForSelector('#Header .menu div:has-text("LinkedIn")');
        await linkedInButton.click();
        const newPage = await context.waitForEvent('page');
        const linkedinPageTitle = await newPage.title();
        console.log(linkedinPageTitle);
        expect(linkedinPageTitle).toContain('LinkedIn')
    });

    // test.only('header cv click', async ({ page, context }) => {
    //     await page.goto('http://localhost:3000/');

    //     const cvButton = await page.waitForSelector('#Header .menu div:has-text("CV")');

    //     try {
    //         const [newPage] = await Promise.all([
    //             context.waitForEvent('page'),
    //             cvButton.click(),
    //         ]);
    //         await newPage.waitForLoadState();
    //         const cvPageTitle = await newPage.title();
    //         console.log(cvPageTitle);
    //     } catch (error) {
    //         console.error(error);
    //     }

    // });
});