const Page = require('./basePage');
const assert = require('assert');

class SaucelabsPage extends Page {

    get superTitle() {
        return $('//h1[@class="supertitle "]'); 
    }

    get motoTitle() {
        return $('//h2[@class="title is-1"]'); 
    } 

    checkIfUserIsOnTheSaucelabsPage() {
        assert.equal(this.getText(this.superTitle),'DEVELOP WITH CONFIDENCE', "Super title is not displayed");
        assert.equal(this.getText(this.motoTitle), 'Pass or fail. The world relies on your code.', "Moto title is not displayed"); 
    }

}

module.exports = new SaucelabsPage();