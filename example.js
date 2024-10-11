import { chromium } from 'playwright';
import { getRandomEmail, getLINYZips, getRandomPerson, getRandomGender, getRandomAgeGroup, getRandomRace, getRandomIncome } from './functions.mjs';

(async () => {
    // Get random user
    const user = getRandomPerson();

    // Launch a new browser instance
    const browser = await chromium.launch({ headless: false });

    // Create a new page
    const page = await browser.newPage();

    await page.goto('https://programs.hundredx.com/teamsnap');
    const frame = await page.locator('iframe').contentFrame();
    await frame.getByLabel('First Name').click();
    await frame.getByText('English', { exact: true }).click();
    await frame.locator('#mat-select-value-1 span').click();
    await frame.getByText('Three Village Swim Club').click();
    await frame.getByLabel('First Name').click();
    await frame.getByLabel('First Name').fill(user['first_name']);
    await frame.getByLabel('Last Name').click();
    await frame.getByLabel('Last Name').fill(user['last_name']);
    await frame.getByRole('textbox', { name: 'Email *' }).click();
    await frame.getByRole('textbox', { name: 'Email *' }).fill(user['email']);
    await frame.locator('#mat-radio-5 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click();
    await frame.getByLabel('Current Zip Code').click();
    await frame.getByLabel('Current Zip Code').fill(String(getLINYZips()));
    await frame.getByText('Do not share', { exact: true }).click();
    await new Promise(resolve => setTimeout(resolve, 3000));
    await frame.getByText('Next', { exact: true }).click();
    await frame.getByText(getRandomGender(), { exact: true }).click();
    await frame.getByText(getRandomAgeGroup(), { exact: true }).click();
    await frame.getByText(getRandomRace(), { exact: true }).click();
    await frame.getByText(getRandomIncome(), { exact: false }).click();
    await frame.getByText("By checking this box", { exact: false }).click();
    await frame.getByText('Submit', { exact: true }).click();
    await new Promise(resolve => setTimeout(resolve, 1000));
    

    // await new Promise(resolve => setTimeout(resolve, 5000));

    // Close the browser
    await browser.close();
})();
