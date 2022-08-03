const Page = require('./basePage');
const assert = require('assert');

class ShoppingCartPage extends Page {

    get checkoutButton() {
        return $('//button[@id="checkout"]');
    }

    get cartHeader() {
        return $('//span[@class="title"]');
    }

    get cartQTY() {
        return $('//div[@class="cart_quantity"]')
    }

    get continueButton() {
        return $('//button[@id="continue-shopping"]')
    }

    get cartDescription() {
        return $('//div[@class="cart_desc_label"]'); 
    }

    clickCheckoutButton() {
        this.click(this.checkoutButton);
    }

    checkIfUserIsOnShoppingCartPage() {
        assert.equal(this.getText(this.cartHeader), "YOUR CART", "Cart header is not displayed");
    }

    checkIfItemIsInTheShoppingCart() {
        assert.equal(this.getText(this.cartQTY), "1", "Number 1 is not displayed");
        assert.equal(this.getText(this.cartDescription), "DESCRIPTION", "Description text is not displayed"); 
    }

    clickContinueShoppingButton() {
        this.click(this.continueButton);
    }
}

module.exports = new ShoppingCartPage();