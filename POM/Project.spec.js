// this is my main test file
import{test,expect} from'@playwright/test';

import{ login }from"./login";
import{ CartPage }from"./Cartpage";
import { ShoppingCart } from './shopping';

test("POM TEST Framework",async({page})=>{
    //login

    const newloginPage = new login(page);
    await newloginPage.gotoPage();
    await newloginPage.loginPage("hsbharat123@gmail.com","Bharat@1234");
    const message = await page.locator(".ico-logout");
    expect(message).toHaveText("Log out");
    //add health book to cart
    const cartPage = new CartPage(page);
    await cartPage.addHealthBookToCart();
    const cartMessage = await page.locator(".content");
    expect(cartMessage).toContainText("The product has been added to your ");
    //shopping cart
    const shoppingCart = new ShoppingCart(page);
    await shoppingCart.proceedToCheckout();

    await page.waitForTimeout(10000);
})