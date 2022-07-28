const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../support/pages/loginPage');
const HomePage = require('../support/pages/homePage');

When(/^The user click on the burger menu button$/, () => {
	HomePage.clickBurgerMenuButton();
});

When(/^The user click on the Logout button$/, () => {
	HomePage.clickLogoutButton();
});

Then(/^The user will be redirected to the Login page of the Saucedemo$/, () => {
	browser.url('https://www.saucedemo.com/');
});