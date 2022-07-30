
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

    get optionLowToHigh() {
        return $('//option[@value="lohi"]')
    }

    get price() {
        return $('//div[@class="inventory_item_price"]')
    }

    get logout() {
        return $('//a[@id="logout_sidebar_link"]')
    }

    get allItems() {
        return $('//a[@id="inventory_sidebar_link"]')
    }

    get itemName() {
        return $('//div[@class="inventory_item_name"]')
    }

    get itemStatus() {
        return $('//button[@id="remove-sauce-labs-backpack"]')
    }

    get facebookIcon() {
        return $('//a[@href="https://www.facebook.com/saucelabs"]')
    }

    get twitterIcon() {
        return $('//a[@href="https://twitter.com/saucelabs"]')
    }

    checkIfUserIsLogedIn() {
        assert.equal(this.shoppingCart.isDisplayed(), true, "Shopping cart is not dispalyed");
        assert.equal(this.getText(this.productHeader), "PRODUCTS", "Product text is not displayed")
    }

    clickAddToCartButton() {
        this.click(this.addToCart) 
    }

    clickBurgerMenuButton() {
        this.click(this.burgerMenu)
    }

    clickAboutCard() {
        this.click(this.aboutCard)
    }

    clickProductSorterButton() {
        this.click(this.productSorter)
    }

    clickOptionLowToHigh() {
        this.click(this.optionLowToHigh)
    }

    clickLogoutButton() {
        this.click(this.logout)
    }

    clickAllItemsButton() {
        this.click(this.allItems)
    }

    checkIfAllItemsAreDisplayed() {
        assert.equal(this.getText(this.itemName), "Sauce Labs Backpack", "Product name is not displayed")
    }

    checkIfPriceIsDisplayed() {
        assert.equal(this.price.isDisplayed(), true, "Price is not displayed")
    }

    clickShoppingCartButton() {
        this.click(this.shoppingCart)
    }

    clickFacebookIcon() {
        this.click(this.facebookIcon)
    }

    clickTwitterIcon() {
        this.click(this.twitterIcon)
    }

}

module.exports = new HomePage();