const {test, expect} = require('@playwright/test')

test('Hidden options dropdown', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.locator("[name='username']").fill('Admin');
    await page.locator("[name='password']").fill('admin123');
    await page.locator("[type='submit']").click();

    await page.locator("//span[normalize-space()='PIM']").click()

    //click on dropdown
    await page.locator("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[1]/div[1]/div[1]")

    //waiting for options
    await page.waitForTimeout(3000);

    const options = await page.$$("//div[@role='option']//span")
    for(let option of options)
    {
        const jobTitle = await option.textContent();
        //console.log(jobTitle);
        if(jobTitle.includes('QA Engineer'))
        {
            await option.click();
            break;
        }
    }
    await page.waitForTimeout(5000);
})