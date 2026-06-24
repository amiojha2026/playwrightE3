import{test,expect} from'@playwright/test';

    let users=[["hsbharat123@gmail.com","Bharat@1234"],
    ["bansari13@gmail.com","Bansari@1234"],
    ["sdetanil3@gmail.com","Test@123$"],
    ["nivedanchipkar786@gmail.com","Password@123"],
    ["amita123@gmail.com","Amita12"],
    ["Banty12345@gmail.com","Banty@143"],
    ["bharath1122@gmail.com","bharath12345"],
    ["giridhargiri464@gmail.com","giridhar@123G"]];

    for (let [email,password] of users)
/// data dirven test
    {
        test(`webshop test for ${email} , ${password}`, async({page})=>{
        await page.goto("https://demowebshop.tricentis.com/");
        await page.locator(".ico-login").click();
        await page.locator(`[id="Email"]`).fill(email);
        await page.locator(`[id="Password"]`).fill(password);
        await page.locator(`[value="Log in"]`).click();
        //await page.locator(`[class="ico-logout"]`).click();
        await expect(page.getByRole('link',{name:'Log out'})).click();
        await page.waitForTimeout(5000);


        })
    }