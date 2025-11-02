const { test, expect } = require('@playwright/test')

test('TC : InputBox', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    //input field before typing assertions
    await expect(await page.locator('#username')).toBeVisible();
    await expect(await page.locator('#username')).toBeEnabled();
    await expect(await page.locator('#username')).toBeEmpty();
    await expect(await page.locator('#username')).toBeEditable();

    await expect(await page.locator('#username')).toHaveAttribute('id', 'username');
    await expect(await page.locator('#username')).toHaveClass('form-control');

    await page.locator('#username').fill('Somenath');

    //after typing assertions
    await expect(await page.locator('#username')).toHaveValue('Somenath'); //input field

    //logging into console
    console.log(await page.locator('#username').inputValue());
    console.log('Entered Value', await page.locator('#username').inputValue()); //

    await page.waitForTimeout(5000);


})