Feature: Checkout process

    Scenario: Checkout process for buying an item
        Given The user is on the Shopping cart page and has an item in the cart
        When The user click on the Checkout button
        And The user typs necessary data
        And The user click on Continue button
        And The user click on Finish button
        Then The user will finish the purchase