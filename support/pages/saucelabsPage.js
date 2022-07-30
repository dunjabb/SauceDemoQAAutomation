const Page = require('./basePage');
const assert = require('assert');

class SaucelabsPage extends Page {

    get superTitle() {
        return $('//h1[@class="supertitle "]'); 
    }

    checkIsUserIsOnTheSaucelabsPage() {
        assert.equal(this.getText(this.superTitle),'DEVELOP WITH CONFIDENCE', "Super title is not displayed");
    }
}
module.exports = new SaucelabsPage();