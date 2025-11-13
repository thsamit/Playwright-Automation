const {test, expect} = require('@playwright/test')

test("Handle checkboxes", async({page})=>{

    await page.goto('https://freelance-learn-automation.vercel.app/signup');

    //single checkbox
    await page.locator("//input[@id='68f1d6bdbaf22d255dee2545' and @type='checkbox']").check();
    //await page.check("//input[@id='68f1d6bdbaf22d255dee2545' and @type='checkbox']");

    expect(await page.locator("//input[@id='68f1d6bdbaf22d255dee2545' and @type='checkbox']")).toBeChecked();
    expect(await page.locator("//input[@id='68f1d6bdbaf22d255dee2545' and @type='checkbox']").isChecked()).toBeTruthy();

    expect(await page.locator("//input[@id='6908129533d8323295b61dd4' and @type='checkbox']").isChecked()).toBeFalsy();

    //Multiple checkboxes
    const checkboxLocators = [
        "//input[@id='68f1d6bdbaf22d255dee2545' and @type='checkbox']", //Java
        "//input[@id='68f1d6cebaf22d255dee2554' and @type='checkbox']", //Python
        "//input[@id='6908129533d8323295b61dd4' and @type='checkbox']" //Playwright
    ];

    for(const locator of checkboxLocators) //select multiple checkboxes
    {
        await page.locator(locator).check();
    }

    await page.waitForTimeout(5000);

    for(const locator of checkboxLocators) //unselect multiple checkboxes which are already selected
    {
        if(await page.locator(locator).isChecked())
        {
            await page.locator(locator).uncheck(); 
        }
    }
    await page.waitForTimeout(5000);

})