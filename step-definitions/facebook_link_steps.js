const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../support/pages/loginPage');
const HomePage = require('../support/pages/homePage');

When(/^The user clicks on the Facebook icon$/, () => {
	HomePage.clickFacebookIcon();
});

Then(/^The user will be redirected to the Saucelabs page on Facebook$/, () => {
	browser.url('https://www.facebook.com/saucelabs');
});
