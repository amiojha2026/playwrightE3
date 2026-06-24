import {test,expect} from"@playwright/test";

test("storagestate", async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login");
    await page.locator(".ico-login").click();
    await page.locator(".email").fill("hsbharat123@gmail.com");
    await page.locator(".password").fill("Bharat@1234");
    await page.locator(".login-button").click();
    await page.context().storageState({path:'auth.json'});
})