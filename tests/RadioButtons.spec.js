const {test, expect} = require('@playwright/test')

test('handle radio button', async({page}) => {

    await page.goto('https://freelance-learn-automation.vercel.app/signup');

    // Radio button
    await page.locator("//input[@id='gender1']").check(); //male
    //await page.check("//input[@id='gender1']");
    await expect(await page.locator("//input[@id='gender1']")).toBeChecked();
    await expect(await page.locator("//input[@id='gender1']").isChecked()).toBeTruthy(); //male

    await expect(await page.locator("//input[@id='gender2']").isChecked()).toBeFalsy(); //female
    
    await page.waitForTimeout(5000); //pausing the execution for some time
})