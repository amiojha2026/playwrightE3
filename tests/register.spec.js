import {test, expect} from "@playwright/test";

test("register @ demo webshop",async({page})=>
{ // navigate to url

    await page.goto("https://demowebshop.tricentis.com/");

//Click on Register 

    await page.locator(".ico-register").click;
    await page.locator("#gender-male").check;
    await page.locator("#FirstName").fill("Biswo");
    await page.locator("#LastName").fill("Ojha");
    await page.locator("#Email").fill("amita123@gmail.com");
    await page.locator("#Password").type("Amita12");
    await page.locator("#ConfirmPassword").fill("Amita12");
    await page.locator("#register-button").click;

})