import{test, expect} from"@playwright/test"
import { asyncWrapProviders } from "node:async_hooks";

test("admin signup", async ({page})=>{
    await page.goto("https://www.shoppersstack.com/admin-signup");
    await page.getByLabel("First Name").fill("Amita");
    await page.getByLabel("Last Name").fill("abc");
    await page.locator('[value="female"]').check();
    await page.getByLabel("Phone Number").fill("9768543213");
    await page.getByLabel("Email Address").fill("ami2026@gmail.com");
    await page.locator("#Password").fill("Ami@2026");
    await page.getByLabel("Confirm Password").fill("Ami@2026");
    await page.locator(`select[id="Country"]`).selectOption("India");
    await page.locator(`select[id="State"]`).selectOption("Karnataka");
    await page.locator(`select[id="City"]`).selectOption("Bengaluru");
    await page.getByRole("button", {name:"Register"}).click();


})
test("merchant Signup", async ({page})=>{

 await page.goto("https://www.shoppersstack.com/urlhelper");
    await page.getByLabel("Enter Admin Email").fill("ami2026@gmail.com");
    await page.locator(`[type="submit"]`).click();
    await page.getByRole("button", { name: "Merchant Signup" }).click();
    await page.getByLabel("First Name").fill("Subhra");
    await page.getByLabel("Last Name").fill("abc");
    await page.getByLabel("E-mail").fill("subhra123@gmail.com");
    await page.getByLabel("Phone Number").fill("7898345672");
    await page.locator("#Password").fill("Subhra@123");
    await page.locator(`[value="female"]`).check();
    await page.getByRole("button", {name:"Next"}).click();

    await page.getByLabel("Company Email").fill("Trikaya");
    await page.getByLabel("Company Email").fill("tri2026@gmail.com");
    await page.getByLabel("Company Phone Number").fill("8765436750");
    await page.getByLabel("Company GSTN").fill("29AAACH7409R1ZX");
    await page.getByLabel("Company Registration Number").fill("U72200KA2000PTC026245");
    await page.getByLabel("Company Website").fill("www.Trikaya.com");
    await expect(page.locator("#Commission")).toBeVisible();
    await page.locator("#Commission").fill("11");
    await page.getByRole("Company Type",{name:"Furniture"}).last
    await page.getByRole("button", {name:"Next"}).click();



    await page.waitForTimeout(10000);
})



