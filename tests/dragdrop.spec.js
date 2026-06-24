import{test, expect} from "@playwright/test";

test("drag and drop2", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //await page.dragAndDrop("#draggable","#droppable");
    const item=await page.locator("#draggable");
    const target=await page.locator("#droppable");
    await item.dragTo(target);
    await page.waitForTimeout(10000);
        

})
test("drag and drop3", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    const item=await page.locator("#draggable");
    const target=await page.locator("#droppable");
    await item.hover();
    await page.mouse.down;

    await target.hover();
    await page.mouse.up;


    await page.waitForTimeout(10000);
        

})

