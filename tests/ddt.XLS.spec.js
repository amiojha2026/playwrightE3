import{test, expect} from "@playwright/test";
import fs from 'fs'

import * as XLSX from "xlsx";
const xlsxFilePath="test data/testData.xlsx";
const content=XLSX.readFile(xlsxFilePath);
const sheet =content.SheetNames[0];
const Worksheet = content.Sheets[sheet]
const loginData=XLSX.utils.sheet_to_json(Worksheet);

for (let {email, password } of loginData) {

        test(`webshop test for ${email} , ${password}`, async({page})=>{
        await page.goto("https://demowebshop.tricentis.com/");
        await page.locator(".ico-login").click();
        await page.locator(`[id="Email"]`).fill(email);
        await page.locator(`[id="Password"]`).fill(password);
        await page.locator(`[value="Log in"]`).click();
        //await page.locator(`[class="ico-logout"]`).click();
        let logged= await page.getByRole('link', {name: 'Log out'});
        expect(logged).toHaveText("Log out");
       

        })
    };