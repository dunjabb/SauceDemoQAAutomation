Feature: Add items to cart

    Scenario: Log in on the homepage of saucedemo website
        Given The user is on the Login page of Saucedemo
        When The user types his username and password
        And The user clicks on the login button
        Then The user will be directed to the Homepage of Saucedemo Swag Labs

    Scenario: Adding items/products to shopping cart
        Given The user is on the Home page of Saucedemo
        When The user click on Add to cart button on one of the products
        Then The the product will be stored to shopping cart