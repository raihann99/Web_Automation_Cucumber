@saucedemo @login
Feature: Saucedemo login

    Background:
        Given user is on Saucedemo login page
        And user input password with "secret_sauce"

    @tc-1 @standard
    Scenario: Successful login
        Given user is on Saucedemo login page
        And user input username with "standard_user"
        When user click login button
        Then user should redirect to the homepage
    
    @tc-2 @visual
    Scenario: Successful login
        Given user is on Saucedemo login page
        And user input username with "visual_user"
        When user click login button
        Then user should redirect to the homepage