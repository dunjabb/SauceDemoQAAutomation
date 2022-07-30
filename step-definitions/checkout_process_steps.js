const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../support/pages/loginPage');
const HomePage = require('../support/pages/homePage');
const ShoppingCartPage = require('../support/pages/shoppingCartPage');
const CheckoutInfoPage = require('../support/pages/checkoutInfoPage');
const CheckoutOverviewPage = require('../support/pages/checkoutOverviewPage');
const userData = require('../config/data/userData');


Given(/^The user is on the Shopping cart page and has an item in the cart$/, () => {
	browser.url("/");
	LoginPage.inputUsernameAndPassword(userData.username, userData.password);
	LoginPage.clickLoginButton();
	browser.pause(1000)
	HomePage.checkIfUserIsLogedIn();
	HomePage.clickAddToCartButton();
	HomePage.clickShoppingCartButton(); 
	ShoppingCartPage.checkIfItemIsInTheShoppingCart();
});

When(/^The user click on the Checkout button$/, () => {
	ShoppingCartPage.clickCheckoutButton();
});

When(/^The user typs necessary data$/, () => {
	CheckoutInfoPage.inputNameLastNameAndPostalCode(userData.name, userData.lastName, userData.postalCode);
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
