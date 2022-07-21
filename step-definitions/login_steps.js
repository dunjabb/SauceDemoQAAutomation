const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require ("../support/pages/loginPage")

Given(/^The user is on the Login page of Saucedemo$/, () => {
	browser.url("/");
});

When(/^The user types his username and password$/, () => {
	LoginPage.inputUsernameAndPassword("standard_user", "secret_sauce")
});

When(/^The user clicks on the login button$/, () => {
	LoginPage.clickLoginButton()
});

Then(/^The user will be directed to the Homepage of Saucedemo Swag Labs$/, () => {
	
    browser.pause(10000)
});
