
const Page = require('./basePage');
const assert = require('assert');

class HomePage extends Page {

    get shoppingCart() {
        return $("//a[@class= 'shopping_cart_link']");
    }

    get productHeader() {
        return $('//span[@class="title"]');
    }

    get addToCart() {
        return $('//button[@class="btn btn_primary btn_small btn_inventory"]');
    }
    
    checkIfUserIsLogedIn() {
        assert.equal(this.shoppingCart.isDisplayed(), true, "Shopping cart is not dispalyed");
        assert.equal(this.productHeader.getText(), "PRODUCTS", "Product text is not displayed")
    }

    clickAddToCartButton() {
        this.addToCart.click()
    }

}

module.exports = new HomePage();
