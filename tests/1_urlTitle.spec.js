const { test, expect } = require('@playwright/test');
const { title } = require('process');

test('TC 1 : url', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await expect(page).toHaveURL('https://rahulshettyacademy.com/AutomationPractice/');
    await expect(page).toHaveURL(/rahul/); //regular expression of assertion for url
    console.log(await page.title());
})

test('TC 2 : Title', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await expect(page).toHaveTitle('Practice Page');
    await expect(page).toHaveTitle(/Page/); //regular expression of for title
    console.log(await page.title());
})
//while running specific file--you need to use front slash /
//when you copy relative path it gives back slash, sp correct and use.
//npx playwright test tests/1_urlTitle.spec.js

//playwright report opening in different port
//npx playwright show-report --port=9330