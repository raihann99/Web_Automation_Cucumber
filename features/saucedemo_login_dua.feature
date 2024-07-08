@saucedemo @login
Feature: Saucedemo login

    Background:
        Given user is on Saucedemo login page
        And user input password with "secret_sauce"

    @tc-3 @standard
    Scenario: Successful login
        Given user is on Saucedemo login page
        And user input username with "problem_user"
        When user click login button
        Then user should redirect to the homepage
    
    @tc-4 @visual
    Scenario: Successful login
        Given user is on Saucedemo login page
        And user input username with "performance_glitch_user"
        When user click login button
        Then user should redirect to the homepage