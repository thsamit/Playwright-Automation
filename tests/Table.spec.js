const{test, expect} = require('@playwright/test')

test('handling table', async({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = await page.locator('#productTable')

    // total number of rows & columns 
    const columns = await table.locator('thead tr th')
    console.log('Number of columns:', await columns.count()) // 4
    expect(await columns.count()).toBe(4)

    const rows = await table.locator('tbody tr')
    console.log('Number of rows:', await rows.count()) // 5
    expect(await rows.count()).toBe(5)

    // select check box for Smartwatch

    /*
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Smartwatch'
    })
    await matchedRow.locator('input').check()
    */

    // select multiple products by reusable function
    await selectProduct(rows, page, 'Smartphone')
    await selectProduct(rows, page, 'Tablet')
    await selectProduct(rows, page, 'Wireless Earbuds')

    await page.waitForTimeout(5000)
})


async function selectProduct(rows, page, name)
{
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    await matchedRow.locator('input').check()
}