import {test,expect} from"@playwright/test";

test.use({storageState:"auth.json"});

test("add to cart",async({page})=>{
    await page.goto("https://www.shoppersstack.com/admin-signup");

})