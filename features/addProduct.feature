Feature: Add items to cart

    Scenario: Adding items/products to shopping cart
        Given The user is on the Home page of Saucedemo
        When The user click on Add to cart button on one of the products
        Then The the product will be stored to shopping cart