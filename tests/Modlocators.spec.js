import{test,expect} from "@playwright/test";
import { link } from "node:fs";

test ("modern locators", async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.getByRole("link", {name:"Log in"}).click();
    await page.getByLabel("Email:").fill("hsbharat123@gmail.com");
    await page.getByLabel("Password:").fill("Bharat@1234");
    await page.getByRole("button",{name:"Log in"}).click();

    let loggedIn=await page.locator(".ico-logout");
    expect(loggedIn).toHaveText("Log out"); 
    await page.locator("#small-searchterms").fill("gift card");
    await page.getByRole("button",{name:"Search"}).click();
    let CardName=await page.getByRole("link", {name:"$100 Physical Gift Card"}).last();
    expect(CardName).toHaveText("$100 Physical Gift Card");

  
    await page.waitForTimeout(10000);
});