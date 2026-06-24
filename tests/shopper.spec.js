import {test,expect} from "@playwright/test";

test("shopper login", async({page})=>{
    await page.goto("https://www.shoppersstack.com/");
    await page.locator("#loginBtn").click();
    await page.locator("#Email").fill("ami2026@gmail.com");
    await page.locator("#Password").fill("Ami@2026");
    await page.locator("#Login").click();
    await page.locator('li a[href="/women"]').click();
    await page.locator(".featuredProducts_footerLeft__PmkNa").filter({hasText:"bata"}).click();
    await page.locator(".ProductDisplay_buyNow__4fwjt").click();
    await page.waitForTimeout(5000);





})