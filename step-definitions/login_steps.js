const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../support/pages/loginPage');
const HomePage = require('../support/pages/homePage');
const userData = require('../config/data/userData');

Given(/^The user is on the Login page of Saucedemo$/, () => {
	browser.url("/");
});

When(/^The user types his username and password$/, () => {
	LoginPage.inputUsernameAndPassword(userData.username, userData.password);
});

When(/^The user clicks on the login button$/, () => {
	LoginPage.clickLoginButton();
});

Then(/^The user will be directed to the Homepage of Saucedemo Swag Labs$/, () => {
	HomePage.checkIfUserIsLogedIn();
});
