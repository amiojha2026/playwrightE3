import { test,expect } from "@playwright/test";
import { asyncWrapProviders } from "node:async_hooks";

test ("modern locators", async ({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.getByLabel("username").fill("student");
    await page.getByLabel("password").fill("Password123");
    await page.locator("#submit").click();
    await expect(page).toHaveURL("https://practicetestautomation.com/logged-in-successfully/");
    let successMassage=page.getByText("Congratulations");
    await expect(successMassage).toBeVisible();
    let logoutButton=page.getByRole("link",{name:"Log out"});
    await expect(logoutButton).toBeVisible();


})
test ("modern locators negative username test", async ({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.getByLabel("username").fill("amita")
    await page.getByLabel("password").fill("Password123");
    await page.locator("#submit").click();
    await expect(page.locator("#error")).toBeVisible();
    await expect(page.locator("#error")).toHaveText("Your username is invalid!");


})
test ("modern locators negative password test", async ({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.getByLabel("username").fill("student")
    await page.getByLabel("password").fill("Password128");
    await page.locator("#submit").click();
    await expect(page.locator("#error")).toBeVisible();
    await expect(page.locator("#error")).toHaveText("Your password is invalid!");



    await page.waitForTimeout(20000);
})


