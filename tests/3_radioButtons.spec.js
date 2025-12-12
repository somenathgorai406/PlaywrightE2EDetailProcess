const { test, expect } = require('@playwright/test')

test('Radio Buttons', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    //basic assertion before action
    //await expect(await page.locator('[value="radio2"]')).not.toBeVisible(); //to check opposite
    await expect(await page.locator('[value="radio2"]')).toBeVisible();
    await expect(await page.locator('[value="radio2"]')).toBeEnabled();
    await expect(await page.locator('[value="radio2"]')).toBeEditable();
    //await expect(await page.locator('[value="radio2"]')).not.toBeEditable(); //.not is opposite

    await page.locator('[value="radio2"]').check(); //specific radio button click //1 2 3 4 all check

    await expect(page.locator('.radioButton')).toHaveCount(3); //all radio buttons
    console.log(await page.locator('.radioButton').count()); //count of all radio buttons

    await page.locator('.radioButton').first().check();
    await page.locator('.radioButton').last().check();

    await expect(await page.locator('.radioButton').last()).toBeChecked();
    await expect(await page.locator('.radioButton').first()).not.toBeChecked();

    //await expect(await page.locator('.radioButton').last()).isChecked().toBeTruthy(); //not working as of now

    await page.locator('[value="radio2"]').click(); //check and click same
    await page.locator('.radioButton').first().click();
    await page.locator('.radioButton').last().click();

    await expect(await page.locator('.radioButton').last()).toBeChecked();
    await expect(await page.locator('.radioButton').first()).not.toBeChecked();

    await page.waitForTimeout(2000);

    //at a time only one radio button to be selected

})