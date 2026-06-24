import {test,expect} from"@playwright/test"

test("screenshot 1", async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com");
    await page.screenshot({path:"page.png"});
})

test("screenshot 2", async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com");
    await page.screenshot({fullPage:true, path:"page1.png"});
})

test("screenshot 3", async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com");
    await page.locator(`img[alt="Tricentis Demo Web Shop"]`).screenshot({path:"page2.png"});
})
