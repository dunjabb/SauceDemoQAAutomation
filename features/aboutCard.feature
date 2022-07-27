Feature: Saucedemo About card

    Scenario: Log in on the homepage of saucedemo website
        Given The user is on the Login page of Saucedemo
        When The user types his username and password
        And The user clicks on the login button
        Then The user will be directed to the Homepage of Saucedemo Swag Labs

    Scenario: Navigating to About card of Saucedemo website
        Given The user is on the Home page of Saucedemo
        When The user clicks on burger menu button
        And The user clicks on the about button
        Then The user will be directed to the Saucelabs website