
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
    
    get burgerMenu() {
        return $('//button[@id="react-burger-menu-btn"]');
    }

    get aboutCard() {
        return $('//a[@id="about_sidebar_link"]')
    }

    get productSorter() {
        return $('//select[@class="product_sort_container"]')
    }

    get optionOne() {
        return $('//option[@value="az"] ')
    }
    
    get allItems() {
        return $('//a[@id="inventory_sidebar_link"]')
    }
     
    checkIfUserIsLogedIn() {
        assert.equal(this.shoppingCart.isDisplayed(), true, "Shopping cart is not dispalyed");
        assert.equal(this.productHeader.getText(), "PRODUCTS", "Product text is not displayed")
    }

    clickAddToCartButton() {
        this.addToCart.click()
    }

    clickBurgerMenuButton() {
        this.burgerMenu.click()
    }

    clickAboutCard() {
        this.aboutCard.click()
    }

    clickProductSorterButton() {
        this.productSorter.click()
    }

    clickOptionOneAZ() {
        this.optionOne.click()
    }
    
    clickAllItemsButton() {
        this.allItems.click()
    }
}

module.exports = new HomePage();
