const {test, expect} = require('@playwright/test') // imported test and expect functions from the playwright/test module

test('Bootstrap dropdown', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')


    await page.waitForTimeout(5000);
})