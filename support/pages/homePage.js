
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

    get resetSidebar() {
        return $('//a[@id="reset_sidebar_link"]')
    }

    get itemStatus() {
        return $('//button[@id="remove-sauce-labs-backpack"]')
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

    clickOptionLowToHigh() {
        this.optionLowToHigh.click()
    }

    clickLogoutButton() {
        this.logout.click()
    }

    clickAllItemsButton() {
        this.allItems.click()
    }

    checkIfAllItemsAreDisplayed() {
        assert.equal(this.itemName.getText(), "Sauce Labs Backpack", "Product name is not displayed")
    }

    checkIfPriceIsDisplayed() {
        assert.equal(this.price.isDisplayed(), true, "Price is not displayed")
    }

    checkIfItemIsInTheShoppingCart() {
        assert.equal(this.itemStatus.getText(), "REMOVE", "Text is not displayed")
    }

    clickShoppingCartButton() {
        this.shoppingCart.click()
    }
}

module.exports = new HomePage();