const { Given, When, Then } = require('@wdio/cucumber-framework');
const HomePage = require('../support/pages/homePage');

When(/^The user clicks on the product sort button$/, () => {
	HomePage.clickProductSorterButton();
});

When(/^The user clicks on option to sort by price low to high$/, () => {
	HomePage.clickOptionLowToHigh();
});

Then(/^All product will be sorted by price from low to high$/, () => {
	HomePage.checkIfPriceIsDisplayed();
});
