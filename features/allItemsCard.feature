Feature: Saucedemo All Items Card

    Scenario: Log in on the homepage of saucedemo website
        Given The user is on the Login page of Saucedemo
        When The user types his username and password
        And The user clicks on the login button
        Then The user will be directed to the Homepage of Saucedemo Swag Labs

    Scenario: Navigating to All items card of Saucedemo website
        Given The user is on the Home page of Saucedemo website
        When The user clicks on the burger menu button
        And The drop down menu apears
        And The user clicks on the All items button
        Then All items, product will be displayed