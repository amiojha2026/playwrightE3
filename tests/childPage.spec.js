import { test,expect } from "@playwright/test";

////const(test,expect) require=require("@playwright/test")
// whenever we want another tab we have to use browser level.

test("handling child page", async({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");
    // it is handling on browser level so it should be use context not a page in below syntax.
    const pagepromise= context.waitForEvent('page');//  new tab in same browser
    await page.locator('button[onclick="myFunction()"]').click();
    const childpage=await pagepromise;
    await childpage.locator(`input[class="gsc-input"]`).fill("Amita");
    


    await page.waitForTimeout(10000);
})