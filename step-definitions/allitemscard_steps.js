const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../support/pages/loginPage');
const HomePage = require('../support/pages/homePage'); 

Given(/^The user is on the Home page of Saucedemo website$/, () => {
	browser.url('https://www.saucedemo.com/inventory.html');
});

When(/^The user clicks on the burger menu button$/, () => {
	HomePage.clickBurgerMenuButton();
});

When(/^The drop down menu apears$/, () => {
	browser.pause(5000);
});

When(/^The user clicks on the All items button$/, () => {
	HomePage.clickAllItemsButton();
});

Then(/^All items, product will be displayed$/, () => {
	browser.pause(5000);
});
