const Page = require('./basePage');
const assert = require('assert');

class FacebookPage extends Page {

    get facebookHeader() {
        return $('//div[@class="j83agx80 i1fnvgqd k4urcfbm n7fi1qx3 poy2od1o j9ispegn kr520xx4 ehxjyohh"]'); 
    }

    checkIsUserIsOnTheFacebookPage() {
        assert.equal(this.facebookHeader.getText(), 'Log In', "Log In text is not displayed");
    }
}
module.exports = new FacebookPage();