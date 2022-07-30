const Page = require('./basePage');

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