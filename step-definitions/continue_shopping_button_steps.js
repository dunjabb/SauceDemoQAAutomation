const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../support/pages/loginPage');
const userData = require('../config/data/userData');
const HomePage = require('../support/pages/homePage');
const ShoppingCartPage = require('../support/pages/shoppingCartPage');

Given(/^The user is on the Shopping cart page$/, () => {
    browser.url("/");
    LoginPage.inputUsernameAndPassword(userData.username, userData.password);
    LoginPage.clickLoginButton();
    HomePage.checkIfUserIsLogedIn();
    HomePage.clickShoppingCartButton();
});

When(/^The user click on the Continue Shopping button$/, () => {
    ShoppingCartPage.clickContinueShoppingButton();
});

Then(/^The user will be returned to the Home page with all products displayed$/, () => {
    HomePage.checkIfAllItemsAreDisplayed();
});
