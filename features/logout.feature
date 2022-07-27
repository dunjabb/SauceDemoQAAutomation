Feature: Saucedemo Logout

    Scenario: Log in on the homepage of saucedemo website
        Given The user is on the Login page of Saucedemo
        When The user types his username and password
        And The user clicks on the login button
        Then The user will be directed to the Homepage of Saucedemo Swag Labs

    Scenario: Logging out of the Saucedemo
        Given The user is on the Home page of the Saucedemo website
        When The user click on the burger menu button
        And The drop down menu appears
        And The user click on the Logout button
        Then The user will be redirected to the Login page of the Saucedemo
