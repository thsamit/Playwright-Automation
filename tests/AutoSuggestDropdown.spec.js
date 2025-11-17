const {test, expect} = require('@playwright/test')

test('Auto suggest dropdown', async({page}) =>{
    await page.goto('https://www.shohoz.com/')

    await page.locator("//input[@id='fromcity']").fill('Dhaka') 
    await page.waitForSelector("//button/span") // waiting for the auto suggestions

    const fromCityOptions = await page.$$("//button/span") // getting all the auto suggestions into a variable
    // The X Path is not fully appropriate. 

    for(let option of fromCityOptions) // reading each and every options into this option variable
    {
        const value = await option.textContent()
        //console.log(value);
        if(value.includes('Dhaka (Ashulia)'))
        {
            await option.click()
            break;
        }
    }

    await page.waitForTimeout(5000);

})