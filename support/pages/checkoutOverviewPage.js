const Page = require('./basePage');
const assert = require('assert');

class ChekoutOverviewPage extends Page {
  
    get finishButton() {
        return $('//button[@id="finish"]');
    }
    
    clickFinishButton() {
        this.finishButton.click();
    }

    get completeHeader() {
        return $('//h2[@class="complete-header"]');
    }

    checkIfPurchaseIsOver() {
        assert.equal(this.completeHeader.getText(), "THANK YOU FOR YOUR ORDER", "Text is not displayed");
    }

}
module.exports = new ChekoutOverviewPage();