const {test, expect} = require('@playwright/test')

test('AssertionsTest', async({page})=>{

    //open app url
    await page.goto('https://demo.nopcommerce.com/register')

    // expect(page).toHaveURL() → Page has URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    // expect(page).toHaveTitle() → Page has title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    // expect(locator).toBeVisible() → Element is visible
    const logoElement = await page.locator('.header-logo')
    await expect(logoElement).toBeVisible()

    // expect(locator).toBeEnabled() → Control is enabled
    const searchStoreBox = await page.locator('#small-searchterms')
    await expect(searchStoreBox).toBeEnabled()

    // expect(locator).toBeChecked() → Radio button is checked
    const maleRadioButton = await page.locator('#gender-male')
    await maleRadioButton.click() // select radio button
    await expect(maleRadioButton).toBeChecked()


    // expect(locator).toBeChecked() → Checkbox is checked
    const newsletterCheckbox = await page.locator('#Newsletter')
    await expect(newsletterCheckbox).toBeChecked()

    // expect(locator).toHaveAttribute() → Element has attribute
    const regButton = await page.locator('#register-button')
    await expect(regButton).toHaveAttribute('type', 'submit')

    // expect(locator).toHaveText() → Element matches text
    await expect(await page.locator('.page-title h1')).toHaveText('Register') //full text

    // expect(locator).toContainText() → Element contains text
    await expect(await page.locator('.page-title h1')).toContainText('Reg') //partial text

    // expect(locator).toHaveValue(value) → Input has a value
    const emailInput = await page.locator('#Email')
    await emailInput.fill('test@demo.com')
    await expect(emailInput).toHaveValue('test@demo.com')

    // expect(locator).toHaveCount() → List of elements has given length
    const options = await page.locator("#customerCurrency option")
    await expect(options).toHaveCount(2)

})