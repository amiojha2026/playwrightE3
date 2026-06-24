import{test, expect} from "@playwright/test";
import fs from 'fs'
import { parse } from "csv-parse/sync";

const csvPath="test data/testData.csv"
const fileContent=fs.readFileSync(csvPath,'utf-8')
const records=parse(fileContent,{ 
        columns:true, 
        skip_empty_lines:true
})
