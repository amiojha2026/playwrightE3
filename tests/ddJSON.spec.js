import{test, expect} from "@playwright/test";
import fs from 'fs' // fs=read the data in the file use

const jsonPath="test data/testData.json"

const loginData=JSON.parse(fs.readFileSync(jsonPath,'utf-8'))

for (let {email,password} of loginData) {

   
        test(`webshop test for ${email} , ${password}`, async({page})=>{
        await page.goto("https://demowebshop.tricentis.com/");
        await page.locator(".ico-login").click();
        await page.locator(`[id="Email"]`).fill(email);
        await page.locator(`[id="Password"]`).fill(password);
        await page.locator(`[value="Log in"]`).click();
        await page.locator(`[class="ico-logout"]`).click();
       // await expect(page.getByRole('link',{name:'Log out'})).click();
       

        })};