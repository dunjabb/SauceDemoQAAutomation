Feature: Saucedemo product sorter

    Scenario: Sorting products by different filter
        Given The user is on the Home page of Saucedemo
        When The user clicks on the product sort button
        And The user clicks on option to sort by price high to low
        Then All product will be sorted by price from high to low