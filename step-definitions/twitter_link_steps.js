const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../support/pages/loginPage');
const HomePage = require('../support/pages/homePage');

When(/^The user clicks on the Twitter icon$/, () => {
    HomePage.clickTwitterIcon();
});

Then(/^The user will be redirected to the Saucelabs account page on Twitter$/, () => {
    ; browser.url('https://twitter.com/saucelabs');
});
