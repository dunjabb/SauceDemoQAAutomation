
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

    get optionHighToLow() {
        return $('//option[@value="hilo"]')
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

    get firstItemPrice() {
        return $('(//div[@class="inventory_item_price"])[1]')
    }

    get secondItemPrice() {
        return $('(//div[@class="inventory_item_price"])[2]')
    }

    get thirdItemPrice() {
        return $('(//div[@class="inventory_item_price"])[3]')
    }

    get fourthItemPrice() {
        return $('(//div[@class="inventory_item_price"])[4]')
    }

    get fifthItemPrice() {
        return $('(//div[@class="inventory_item_price"])[5]')
    }

    get sixthItemPrice() {
        return $('(//div[@class="inventory_item_price"])[6]')
    }

    get headerPicture() {
        return $('//div[@class="peek"]');
    }

    checkIfUserIsLogedIn() {
        assert.equal(this.shoppingCart.isDisplayed(), true, "Shopping cart is not dispalyed");
        assert.equal(this.getText(this.productHeader), "PRODUCTS", "Product text is not displayed")
        assert.equal(this.headerPicture.isDisplayed(), true, "Header picture is not displayed");
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

    clickOptionHighToLow() {
        this.click(this.optionHighToLow)
    }

    clickLogoutButton() {
        this.click(this.logout)
    }

    clickAllItemsButton() {
        this.click(this.allItems)
    }

    checkIfItemsAreDisplayed() {
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

    checkIfItemsAreSortedFromHighToLowPrice() {
        const firstItemPrice = this.getText(this.firstItemPrice).split('$')[1];
        const secondItemPrice = this.getText(this.secondItemPrice).split('$')[1];
        const thirdItemPrice = this.getText(this.thirdItemPrice).split('$')[1];
        const fourthItemPrice = this.getText(this.fourthItemPrice).split('$')[1];
        const fifthItemPrice = this.getText(this.fifthItemPrice).split('$')[1];
        const sixthItemPrice = this.getText(this.sixthItemPrice).split('$')[1];
        console.log(firstItemPrice);
        console.log(secondItemPrice);
        console.log(thirdItemPrice);
        console.log(fourthItemPrice);
        console.log(fifthItemPrice);
        console.log(sixthItemPrice);
        assert.equal(firstItemPrice >= secondItemPrice, true, "First is bigger than second");
        assert.equal(secondItemPrice >= thirdItemPrice, true, "Second is bigger than third");
        assert.equal(thirdItemPrice >= fourthItemPrice, true, "Third is equal to fourth");
        assert.equal(+fourthItemPrice >= +fifthItemPrice, true, "Fourth is bigger than fifth");
        assert.equal(fifthItemPrice >= sixthItemPrice, true, "Fifth is bigger than sixth");
    }

}

module.exports = new HomePage();