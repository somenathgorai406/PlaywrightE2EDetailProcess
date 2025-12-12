const { test, expect } = require('@playwright/test')

test('TC : InputBox', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    //input field before typing assertions
    await expect(await page.locator('#username')).toBeVisible();//1. visible
    //2. Stable
    //3. Receive Event--means not covered
    await expect(await page.locator('#username')).toBeEnabled(); //4. Enabled
    await expect(page.locator('#username')).toBeEmpty(); //await can be there or not inide expect
    await expect(await page.locator('#username')).toBeEditable();

    await expect(await page.locator('#username')).toHaveAttribute('id', 'username');
    await expect(await page.locator('#username')).toHaveClass('form-control');

    await page.locator('#username').fill('Somenath'); //1 2 3
    await page.locator('#username').clear();
    await page.fill('#username', 'Somenath'); //another way to use fill

    //after typing assertions
    await expect(await page.locator('#username')).toHaveValue('Somenath'); //input field

    //logging into console
    console.log(await page.locator('#username').inputValue());
    console.log('Entered Value', await page.locator('#username').inputValue()); //
    await page.waitForTimeout(5000);


})
/* VSRE
Element is resolved (only one element matches).
Element is visible (not hidden in DOM).
Element is stable (not animating/moving).
Element can receive events (not covered by another element).
Element is enabled (not disabled).
 */