const Page = require('./basePage');
const assert = require('assert');

class ChekoutOverviewPage extends Page {

    get finishButton() {
        return $('//button[@id="finish"]');
    }

    get completeHeader() {
        return $('//h2[@class="complete-header"]');
    }

    get pageHeader() {
        return $('//span[@class="title"]');
    }

    get checkoutFinishImage() {
        return $('//img[@alt="Pony Express"]');
    }

    clickFinishButton() {
        this.click(this.finishButton);
    }

    checkIfPurchaseIsOver() {
        assert.equal(this.getText(this.completeHeader), "THANK YOU FOR YOUR ORDER", "Text is not displayed");
        assert.equal(this.checkoutFinishImage.isDisplayed(), true, "Checkout image is not displayed");
    }

    checkIfUserIsOnTheOverviewPage() {
        assert.equal(this.getText(this.pageHeader), 'CHECKOUT: OVERVIEW', "Page header is not displayed")
    };

}
module.exports = new ChekoutOverviewPage();