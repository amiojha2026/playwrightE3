import {test,expect} from "@playwright/test";

test("end to end test", async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login");
    await page.locator(".ico-login").click();
    await page.locator(".email").fill("hsbharat123@gmail.com");
    await page.locator(".password").fill("Bharat@1234");
    await page.locator(".login-button").click();
    
    await page.locator('a[href="/books"]').first().click();
    await page.locator("#products-orderby").selectOption("Price: High to Low");
    await page.locator("#products-pagesize").selectOption("12");
    await page.locator("#products-viewmode").selectOption("List");
    await page.locator('h2 a[href="/health"]').click();
    await page.locator("#add-to-cart-button-22").click();
    await page.locator(".cart-label").filter({hasText:"Shopping cart"}).click();
    await page.locator("#CountryId").selectOption("India");
    await page.locator("#ZipPostalCode").fill("560011");
    await page.locator("#termsofservice").check();
    await page.locator("#checkout").click();



    await page.waitForTimeout(10000);


})
