/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class BasePage {

    getText(element) {
        element.waitForDisplayed({ timeout: 30000 })
        return element.getText()
    }

    click(element) {
        element.waitForDisplayed({ timeout: 30000 })
        element.click()
    }

    setValue(element, value) {
        element.waitForDisplayed({ timeout: 30000 })
        element.setValue(value)
    }

}

