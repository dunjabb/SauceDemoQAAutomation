const { Given, When, Then } = require('@wdio/cucumber-framework');
const HomePage = require('../support/pages/homePage'); 

Given(/^The user is on the Home page of Saucedemo$/, () => {
	browser.url('https://www.saucedemo.com/inventory.html');
});

When(/^The user click on Add to cart button on one of the products$/, () => {
	HomePage.clickAddToCartButton();
});

Then(/^The the product will be stored to shopping cart$/, () => {
	browser.pause(10000);
});
