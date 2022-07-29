const { Given, When, Then } = require('@wdio/cucumber-framework');
const HomePage = require('../support/pages/homePage');

When(/^The user clicks on the burger menu button$/, () => {
	HomePage.clickBurgerMenuButton();
});

When(/^The user clicks on the All items button$/, () => {
	HomePage.clickAllItemsButton();
});

Then(/^All items, product will be displayed$/, () => {
	HomePage.checkIfAllItemsAreDisplayed();
});
