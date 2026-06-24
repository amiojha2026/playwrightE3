import{test,expect} from'@playwright/test';

    let items=['gift card','book','computer','smartphone']
    //let Email="amita123@gmail.com";
    //let Password="Amita12";
    for (items of items) 
   {
    test(`webshop test ${items}`, async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator("#small-searchterms").fill(items);
    await page.locator('input.button-1.search-box-button').click();
    await page.waitForTimeout(5000);


    
})
}