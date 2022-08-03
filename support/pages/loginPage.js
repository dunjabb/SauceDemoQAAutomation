const Page = require('./basePage');
const assert = require('assert');

class LoginPage extends Page {

    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return $('//input[@class = "input_error form_input" and @placeholder = "Username"]');
    }

    get inputPassword() {
        return $('//input[@class = "input_error form_input" and @placeholder = "Password"]');
    }

    get btnSubmit() {
        return $('//input[@type = "submit"]');
    }

    get botPicture() {
        return $('//div[@class="bot_column"]');
    }

    /**
        * a method to encapsule automation code to interact with the page
        * e.g. to login using username and password
        */

    inputUsernameAndPassword(username, password) {
        this.setValue(this.inputUsername, username);
        this.setValue(this.inputPassword, password);
    }

    clickLoginButton() {
        this.click(this.btnSubmit);
    }

    checkIfUserIsOnLoginPage() {
        assert.equal(this.btnSubmit.isDisplayed(), true, "Login button is not dispalyed");
        assert.equal(this.botPicture.isDisplayed(), true, "Bot picture is not displayed"); 
    }
}

module.exports = new LoginPage();