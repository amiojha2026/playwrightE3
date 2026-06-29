import{test,expect} from'@playwright/test';

test("double click @reg" , async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
await page.getByRole("button",{name:"Copy Text"}).dblclick();
await page.waitForTimeout(10000);
})

test("screenshot 1 @san", async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com");
    await page.screenshot({path:"page.png"});
})

test("drag and drop2 @reg", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //await page.dragAndDrop("#draggable","#droppable");
    const item=await page.locator("#draggable");
    const target=await page.locator("#droppable");
    await item.dragTo(target);
    await page.waitForTimeout(10000);
})

test("select multiple option @smoke", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.selectOption('#colors',['Red','Yellow', 'Green']);

    await page.waitForTimeout(10000);
})

test("key Board Actions @fun", async ({page})=>{
    await page.goto("https://gotranscript.com/text-compare");
    await page.getByPlaceholder("Paste one version of the text here.").fill("Hi this is playwright automation");
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Control+C");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Control+V");
    await page.waitForTimeout(10000)
})