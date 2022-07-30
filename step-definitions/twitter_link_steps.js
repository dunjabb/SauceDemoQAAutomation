const { Given, When, Then } = require('@wdio/cucumber-framework');
const HomePage = require('../support/pages/homePage');
const TwitterPage = require('../support/pages/twitterPage');

When(/^The user clicks on the Twitter icon$/, () => {
    HomePage.clickTwitterIcon();
});

Then(/^The user will be redirected to the Saucelabs account page on Twitter$/, () => {
    browser.url('https://twitter.com/saucelabs');
    TwitterPage.checkIsUserIsOnTheTwitterPage();
});
