
const Page = require('./basePage');
const assert = require('assert');

class HomePage extends Page {

    get shoppingCart() {
        return $("//a[@class= 'shopping_cart_link']");
    }

    get productHeader() {
        return $('//span[@class="title"]');
    }

    get btnSubmit() {
        return $('//div[@class="bm-burger-button"]')
    }

    checkIfUserIsLogedIn() {
        assert.equal(this.shoppingCart.isDisplayed(), true, "Shopping cart is not dispalyed");
        assert.equal(this.productHeader.getText(), "PRODUCTS", "Product text is not displayed")
    }
}

module.exports = new HomePage();
