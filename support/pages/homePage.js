
const Page = require('./basePage');
const assert = require('assert');

class HomePage extends Page {

    get shoppingCart() {
        return $("//a[@class= 'shopping_cart_link']");
    }

    get productHeader() {
        return $('//span[@class="title"]');
    }

    get burgerMenu() {
        return $('//button[@id="react-burger-menu-btn"]');
    }

    get aboutCard() {
        return $('//a[@id="about_sidebar_link"]')
    }

    get allItems() {
        return $('//a[@id="inventory_sidebar_link"]')
    }
     
    checkIfUserIsLogedIn() {
        assert.equal(this.shoppingCart.isDisplayed(), true, "Shopping cart is not dispalyed");
        assert.equal(this.productHeader.getText(), "PRODUCTS", "Product text is not displayed")
    }

    clickBurgerMenuButton() {
        this.burgerMenu.click()
    }

    clickAboutCard() {
        this.aboutCard.click()
    }
    clickAllItemsButton() {
        this.allItems.click()
    }
}

module.exports = new HomePage();
