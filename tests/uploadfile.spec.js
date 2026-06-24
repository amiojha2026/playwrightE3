import {test,expect} from "@playwright/test";

test("upload file", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //await page.locator("#singleFileInput").setInputFiles("Playwright class notes.pdf");
    await page.locator("#multipleFilesInput").setInputFiles(["Playwright class notes.pdf","file-sample.pdf","file-sample1.pdf"]);
    await page.waitForTimeout(10000);

})