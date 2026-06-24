import{test, expect} from"@playwright/test"

test("select multiple option", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.selectOption('#colors',['Red','Yellow', 'Green']);

    await page.waitForTimeout(5000);
      
        
       

})