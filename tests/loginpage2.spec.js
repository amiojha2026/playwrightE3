import { test,expect } from "@playwright/test";

test("login page handling 2", async({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder(`Username`).fill(`Admin`);
    await page.locator('[name="password"]').fill("admin123");
    //await page.locator('button:has-text("Login")').click();
    await page.screenshot({path:"login.png"});
    const pagepromise=context.waitForEvent('page');
    await page.locator(`a[href="http://www.orangehrm.com"]`). click();
    const childpage=await pagepromise;
    await childpage.locator(`[class="email text tryit-email"]`).fill("smita123@gmail.com");
    //await childpage.getByPlaceholder("page.getByPlaceholder('your email address')").fill("smita123@gmail.com")
    
    await childpage.screenshot({fullPage:true, path:"email.png"});

    
    



})