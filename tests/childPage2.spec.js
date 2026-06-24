import { test,expect } from "@playwright/test";

test("handling child page2", async({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    const pagepromise = context.waitForEvent('page');
    await page.locator('a[href="http://www.orangehrm.com"]').click();
    const childpage = await pagepromise;
    //await page.locator(`input[type="email"]`).fill("smita123@gmail.com");
    await childpage.getByPlaceholder("your email address").fill("abc@gmail.com");
     
    await page.waitForTimeout(10000);


})