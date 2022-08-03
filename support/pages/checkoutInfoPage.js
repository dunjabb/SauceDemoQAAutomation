const Page = require('./basePage');
const assert = require('assert');

class CheckoutInfoPage extends Page {

    get inputName() {
        return $('//input[@id="first-name"]');
    }

    get inputLastName() {
        return $('//input[@id="last-name"]');
    }

    get inputPostalCode() {
        return $('//input[@id="postal-code"]');
    }

    get continueButton() {
        return $('//input[@id="continue"]');
    }

    get cartHeader() {
        return $('//span[@class="title"]');
    }

    checkIfUserIsOnTheInfoPage() {
        assert.equal(this.getText(this.cartHeader), 'CHECKOUT: YOUR INFORMATION', "Cart header is not displayed");
    }

    inputNameLastNameAndPostalCode(name, lastName, postalCode) {
        this.setValue(this.inputName, name);
        this.setValue(this.inputLastName, lastName);
        this.setValue(this.inputPostalCode, postalCode);
    }

    clickContinueButton() {
        this.click(this.continueButton);
    }

}
module.exports = new CheckoutInfoPage();