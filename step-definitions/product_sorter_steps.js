const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../support/pages/loginPage');
const HomePage = require('../support/pages/homePage'); 

Given(/^The user is on the Home page of Saucedemo$/, () => {
	browser.url('https://www.saucedemo.com/inventory.html');
});

When(/^The user clicks on the product sort button$/, () => {
	HomePage.clickProductSorterButton();
});

When(/^The drop down menu appears$/, () => {
	browser.pause(5000);
});

When(/^The user clicks on option one from A to Z$/, () => {
	HomePage.clickOptionOneAZ();
});

Then(/^All product will be sorted by name from A to Z$/, () => {
	browser.pause(5000);
});
