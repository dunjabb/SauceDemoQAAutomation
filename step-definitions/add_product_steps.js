const { Given, When, Then } = require('@wdio/cucumber-framework');
const homePage = require('../support/pages/homePage');
const HomePage = require('../support/pages/homePage');

When(/^The user click on Add to cart button on one of the products$/, () => {
	HomePage.clickAddToCartButton();
});

Then(/^The the product will be stored to shopping cart$/, () => {
	homePage.checkIfItemIsInTheShoppingCart();
});
