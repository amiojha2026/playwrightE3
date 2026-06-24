import{test, expect} from "@playwright/test";

test("Rahul login page ", async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator('[id="userEmail"]').fill("smita2026@gmail.com");
    await page.locator('[id="userPassword"]').fill("Smita@2026");
    await page.locator('[id="login"]').click();
    //await page.locator(img[src="https://rahulshettyacademy.com/api/ecom/uploads/productImage_1767959265156.jpg"]).click();
    //await page.getByLabel("ADIDAS ORIGINAL").click
    //await page.getByRole("button",{name:" Add To Cart"}).first().click();
   // const productName = "ADIDAS ORIGINA";

    await page.locator('.card-body').filter({ hasText:"ADIDAS ORIGINAL"}).click();
    await page.getByRole("button",{name:" Add To Cart"}).first().click();
  
    
   
     
})