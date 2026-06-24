import{test, expect} from "@playwright/test";

test("Inner frames", async ({page})=>{
    await page.goto("https://ui.vision/demo/iframes");
    const inner= await page.frame({url:"https://docs.google.com/forms/d/e/1FAIpQLScP-K8zi-9ar0MCq93D3VIFhegSNPveBfdLqiMfTYR9Q1iSKQ/viewform?embedded=true"});
   
    await inner.locator(".Id5V1").nth(1).click();
    
    await inner.getByLabel("General Web Automation").click();
    await page.locator('span:has-text("Yes")');
    //await inner.getByText("Well, now I know :-)").click();
    //await inner.getByLabel("Next").click();
    await page.getByText('Next', { exact: true });
    await page.waitForTimeout(10000);

})