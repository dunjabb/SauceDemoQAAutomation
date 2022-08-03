const { Given, When, Then } = require('@wdio/cucumber-framework');
const HomePage = require('../support/pages/homePage');

When(/^The user clicks on the product sort button$/, () => {
	HomePage.clickProductSorterButton();
});

When(/^The user clicks on option to sort by price high to low$/, () => {
	HomePage.clickOptionHighToLow();
});

Then(/^All product will be sorted by price from high to low$/, () => {
	HomePage.checkIfItemsAreSortedFromHighToLowPrice();
});
