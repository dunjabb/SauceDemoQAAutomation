const { Given, When, Then } = require('@wdio/cucumber-framework');
const HomePage = require('../support/pages/homePage');
const ShoppingCartPage = require('../support/pages/shoppingCartPage');
const CheckoutInfoPage = require('../support/pages/checkoutInfoPage');
const CheckoutOverviewPage = require('../support/pages/checkoutOverviewPage');
const userData = require('../config/data/userData');

When(/^The user clicks on the Shopping cart button$/, () => {
	HomePage.clickShoppingCartButton();
});

When(/^The user click on the Checkout button$/, () => {
	ShoppingCartPage.clickCheckoutButton();
});

When(/^The user typs necessary data$/, () => {
	CheckoutInfoPage.inputNameLastnameAndPostalCode(userData.name, userData.lastName, userData.postalCode);
});

When(/^The user click on Continue button$/, () => {
	CheckoutInfoPage.clickContinueButton();
});

When(/^The user click on Finish button$/, () => {
	CheckoutOverviewPage.clickFinishButton();
});

Then(/^The user will finish the purchase$/, () => {
	CheckoutOverviewPage.checkIfPurchaseIsOver();
});
