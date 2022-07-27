Feature: Saucedemo product sorter

    Scenario: Log in on the homepage of saucedemo website
        Given The user is on the Login page of Saucedemo
        When The user types his username and password
        And The user clicks on the login button
        Then The user will be directed to the Homepage of Saucedemo Swag Labs

    Scenario: Sorting products by different filter
        Given The user is on the Home page of Saucedemo
        When The user clicks on the product sort button
        And The drop down menu appears
        And The user clicks on option one from A to Z
        Then All product will be sorted by name from A to Z