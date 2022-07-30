const Page = require('./basePage');
const assert = require('assert');

class ShoppingCartPage extends Page {

    get checkoutButton() {
        return $('//button[@id="checkout"]');
    }

    get cartHeader() {
        return $('//span[@class="title"]');
    }

    clickCheckoutButton() {
        this.click(this.checkoutButton);
    }

    checkIfUserIsOnShoppingCartPage() {
        assert.equal(this.cartHeader.getText(), "YOUR CART", "Cart header is not displayed")
    }
}

module.exports = new ShoppingCartPage();