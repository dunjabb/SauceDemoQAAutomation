const Page = require('./basePage');
const assert = require('assert');

class ChekoutOverviewPage extends Page {

    get finishButton() {
        return $('//button[@id="finish"]');
    }

    clickFinishButton() {
        this.click(this.finishButton);
    }

    get completeHeader() {
        return $('//h2[@class="complete-header"]');
    }

    checkIfPurchaseIsOver() {
        assert.equal(this.getText(this.completeHeader), "THANK YOU FOR YOUR ORDER", "Text is not displayed");
    }

}
module.exports = new ChekoutOverviewPage();