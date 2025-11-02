const { test, expect } = require('@playwright/test')

test('check Boxes like radio', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    //basic assertion before action
    await expect(await page.locator('#checkBoxOption1')).toBeVisible();
    await expect(await page.locator('#checkBoxOption1')).toBeEnabled();
    await expect(await page.locator('#checkBoxOption1')).toBeEditable();

    await page.locator('#checkBoxOption2').check(); //specific radio button click

    await expect(page.locator('#checkbox-example input[type="checkbox"]')).toHaveCount(3); //all radio buttons
    console.log(await page.locator('#checkbox-example input[type="checkbox"]').count()); //count of all radio buttons

    await page.locator('#checkbox-example input[type="checkbox"]').first().check();
    await page.locator('#checkbox-example input[type="checkbox"]').last().check();

    await expect(await page.locator('#checkbox-example input[type="checkbox"]').last()).toBeChecked();
    await expect(await page.locator('#checkbox-example input[type="checkbox"]').first()).toBeChecked();

    //await expect(await page.locator('.radioButton').last()).isChecked().toBeTruthy(); //not working as of now

    await page.locator('#checkBoxOption2').click(); //check and click same
    await page.locator('#checkbox-example input[type="checkbox"]').first().click();
    await page.locator('#checkbox-example input[type="checkbox"]').last().click();

    await expect(await page.locator('#checkbox-example input[type="checkbox"]').last()).not.toBeChecked();
    await expect(await page.locator('#checkbox-example input[type="checkbox"]').first()).not.toBeChecked();

    await page.waitForTimeout(2000);

})

test('check Boxes other features', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    await page.locator('#checkBoxOption1').check();
    await page.locator('#checkBoxOption2').click();
    await page.locator('#checkBoxOption3').check();

    await page.locator('#checkBoxOption1').uncheck(); //specific check box uncheck 
    await page.locator('#checkBoxOption2').uncheck();
    await page.locator('#checkBoxOption3').uncheck();

    await expect(page.locator('#checkbox-example input[type="checkbox"]')).toHaveCount(3); //all radio buttons
    console.log(await page.locator('#checkbox-example input[type="checkbox"]').count()); //count of all radio buttons

    //selecting all the check boxes
    for (let i = 0; i < await page.locator('#checkbox-example input[type="checkbox"]').count(); i++) {
        await page.locator('#checkbox-example input[type="checkbox"]').nth(i).check();
    }
    //unchecking all the check boxes
    for (let i = 0; i < await page.locator('#checkbox-example input[type="checkbox"]').count(); i++) {
        if (await page.locator('#checkbox-example input[type="checkbox"]').nth(i).isChecked) {
            await page.locator('#checkbox-example input[type="checkbox"]').nth(i).uncheck();
        }
    }
    //creating array of locators and looping
    const locators = ['#checkBoxOption1', '#checkBoxOption3'];
    for (const locator of locators) {
        await page.locator(locator).check();
    }

    //
    const checkBoxlocators = await page.$$('#checkbox-example input[type="checkbox"]'); //just replace 'locator' with '$$'
    for (let eachlocator of checkBoxlocators) {
        await eachlocator.uncheck();
    }

    await page.waitForTimeout(2000);

})