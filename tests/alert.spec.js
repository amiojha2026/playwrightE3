import{test, expect} from"@playwright/test"


test("simple alert", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on("dialog",async dialog=>{
    await dialog.accept();

    })
    await page.locator("#alertBtn").click();


})
////////////////////////////////////////////
test("confirmation alert", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on("dialog",async dialog=>{
    await dialog.dismiss();

    })
    await page.locator("#confirmBtn").click();


})
//////////////////////////////////////////
test("prompt alert", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on("dialog",async dialog=>{
    await dialog.accept("Amita");


    })
await page.locator("#promptBtn").click();

})
///////////////////////////////////////
test("alert with ok", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html");
    page.on("dialog",async dialog=>{
        await dialog.accept()
    })
await page.locator(`a[href="#OKTab"]`).click();
await page.locator(`[class="btn btn-danger"]`).click();

})



////////////////////////////////////////////////////
test("alert with ok & Cancel", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html");
    page.on("dialog",async dialog=>{
        await dialog.accept()
    })

     await page.locator(`a[href="#CancelTab"]`).click();
     await page.locator(`[class="btn btn-primary"]`).click();

 
    })

////////////////////////////////
test("alert with textbox", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html");
    page.on("dialog",async dialog=>{
        await dialog.accept("Amita")
    })
await page.locator(`a[href="#Textbox"]`).click();
await page.locator(`[class="btn btn-info"]`).click();

})