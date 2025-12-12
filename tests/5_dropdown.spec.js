const { test, expect } = require('@playwright/test')

test.only('Dropdowns', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    //await page.locator('option[value="option2"]').click(); //not like radio or check boxes,focus select tag
    //under select tag that portion has to be selected
    await page.locator('#dropdown-class-example').selectOption("Option1"); //label means visible text
    await page.locator('#dropdown-class-example').selectOption({ label: 'Option2' });
    await page.locator('#dropdown-class-example').selectOption('option3'); //by value
    await page.locator('#dropdown-class-example').selectOption({ value: "option1" });
    await page.locator('#dropdown-class-example').selectOption({ index: 2 });
    await page.selectOption('#dropdown-class-example', 'Option1');
    //assertion
    await expect(await page.locator('#dropdown-class-example')).toHaveValue('option1')

    //assertion of count of dropdowns--Approach 1
    await expect(await page.locator('option[value*="option"]')).toHaveCount(3);
    //assertion of count--Approach 2
    const locatorlist = await page.$$('option[value*="option"]');
    console.log('count of dropdowns', locatorlist.length);
    await expect(locatorlist.length).toBe(3);

    //check presence of value in drop down--Approach 1
    const content1 = await page.locator('#dropdown-class-example').textContent();//only the drop down
    await expect(content1.includes('Option1')).toBeTruthy(); //
    //by allTextContents
    const content = await page.locator('option[value*="option"]').allTextContents(); //list of all values
    await expect(content.includes('Option1')).toBeTruthy();

    //check presence of value in drop down and select--Approach 2
    const locatorlist1 = await page.$$('option[value*="option"]');
    for (let locator of locatorlist1) {
        let value = await locator.textContent();
        console.log('valie is: ', value);
        if (value.includes('Option1')) {
            await page.selectOption('#dropdown-class-example', locator.textContent());
        }
    }

    await page.waitForTimeout(4000);

})