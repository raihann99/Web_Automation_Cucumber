import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import DashboardPage from '../pageobjects/dashboard.page.js';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

Given('user is on Saucedemo login page', async () => {
  await LoginPage.open()
})

Given('user input password with {string}', async (password) => {
  await (await LoginPage.passwordTextBox).setValue(password)
})

When('user click login button', async () => {
  await LoginPage.btnSubmit.click()
})

Given('user input username with {string}', async (username) => {
  await LoginPage.inputUsername(username)
})

Then('user should redirect to the homepage', async () => {
  await DashboardPage.validateOnPage()
})