
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

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    inputUsernameAndPassword(username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
    }

    clickLoginButton() {
        this.btnSubmit.click()
    }
}

module.exports = new LoginPage();
