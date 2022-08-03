const { Given, When, Then } = require('@wdio/cucumber-framework');
const HomePage = require('../support/pages/homePage');
const FacebookPage = require('../support/pages/facebookPage');

When(/^The user clicks on the Facebook icon$/, () => {
	HomePage.clickFacebookIcon();
});

Then(/^The user will be redirected to the Saucelabs page on Facebook$/, () => {
	browser.switchWindow('https://www.facebook.com/saucelabs');
	FacebookPage.checkIsUserIsOnTheFacebookPage();
});
