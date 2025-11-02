const { test, expect } = require('@playwright/test')

test('TC 1 : url', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await expect(page).toHaveURL('https://rahulshettyacademy.com/AutomationPractice/');
    await expect(page).toHaveURL(/rahul/); //regular expression of assertion for url
})

test('TC 2 : Title', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await expect(page).toHaveTitle('Practice Page')
    await expect(page).toHaveTitle(/Page/); //regular expression of for title
})