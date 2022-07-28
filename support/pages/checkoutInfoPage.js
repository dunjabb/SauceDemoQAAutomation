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

    inputNameLastnameAndPostalCode(name, lastName, postalCode) {
        this.inputName.setValue(name);
        this.inputLastName.setValue(lastName);
        this.inputPostalCode.setValue(postalCode); 
    }

    clickContinueButton() {
        this.continueButton.click()
    }

}
module.exports = new CheckoutInfoPage();