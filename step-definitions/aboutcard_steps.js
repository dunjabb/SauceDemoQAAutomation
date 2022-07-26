const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../support/pages/loginPage');
const HomePage = require('../support/pages/homePage'); 

Given(/^The user is on the Login page of Saucedemo$/, () => {
	browser.url('/');
});

When(/^The user types his username and password$/, () => {
	LoginPage.inputUsernameAndPassword("standard_user", "secret_sauce");
});

When(/^The user clicks on the login button$/, () => {
	LoginPage.clickLoginButton();
});

Then(/^The user will be directed to the Homepage of Saucedemo Swag Labs$/, () => {
	browser.pause(1000) 
	HomePage.checkIfUserIsLogedIn();
});

Given(/^The user is on the Home page of Saucedemo$/, () => {
	browser.url('https://www.saucedemo.com/inventory.html');
});

When(/^The user clicks on burger menu button$/, () => {
	HomePage.clickBurgerMenuButton();
});

When(/^The user clicks on the about button$/, () => {
	HomePage.clickAboutCard();
});

Then(/^The user will be directed to the Saucelabs website$/, () => {
	browser.url('https://saucelabs.com/');
});
