const {test, expect} = require('@playwright/test') // imported test and expect functions from the playwright/test module

test('Bootstrap dropdown', async({page})=>{ // Here, "Bootstrap dropdown" is the description or title of the test
    
    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2') // Currently, this link does not exist

    await page.locator('.multiselect').click() //click on the dropdown

    //1
    //const options = await page.locator('ul>li label input')
    //await expect(options).toHaveCount(11);

    //2
    //const options = await page.$$('ul>li label input')
    //await expect(options.length).toBe(11)

    //3 select options from dropdown
    /*const options = await page.$$('ul>li label')
    for(let option of options)
    {
        const value = await option.textContent();
        //console.log("value is", value)
        if(value.includes('Angular') || value.includes('Java'))
        {
            await option.click()
        }
    }*/


    //3 deselect options from dropdown
    const options = await page.$$('ul>li label')
    for(let option of options)
    {
        const value = await option.textContent();
        //console.log("value is", value)
        if(value.includes('HTML') || value.includes('CSS'))
        {
            await option.click()
        }
    }

    await page.waitForTimeout(5000);
})