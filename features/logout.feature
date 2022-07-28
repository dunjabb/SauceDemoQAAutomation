Feature: Saucedemo Logout

    Scenario: Logging out of the Saucedemo
        Given The user is on the Home page of Saucedemo
        When The user click on the burger menu button
        And The user click on the Logout button
        Then The user will be redirected to the Login page of the Saucedemo
