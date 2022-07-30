const Page = require('./basePage');
const assert = require('assert');

class TwitterPage extends Page {

    get twitterLogo() {
        return $('//div[@class="css-1dbjc4n r-dnmrzs r-1vvnge1"]'); 
    }

    checkIsUserIsOnTheTwitterPage() {
        assert.equal(this.twitterLogo.isDisplayed(), true, "Twitter logo is not displayed");
    }
}
module.exports = new TwitterPage();