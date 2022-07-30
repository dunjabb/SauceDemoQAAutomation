const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../support/pages/loginPage');
const HomePage = require('../support/pages/homePage');
const userData = require('../config/data/userData');

Given(/^The user is on the Home page of Saucedemo$/, () => {
	browser.url("/");
	LoginPage.inputUsernameAndPassword(userData.username, userData.password);
	LoginPage.clickLoginButton();
	browser.pause(1000)
	HomePage.checkIfUserIsLogedIn();
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
