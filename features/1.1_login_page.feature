Feature: Login Rules
  In order to test Swag Labs
  As a Customer
  I want to be able to Login in Swag Labs

  Background: 
    Given User already in Login Swag Labs
    When User Input username and passsword
    Then click Login Button

Scenario: from Product Swag Labs I want to order Sauce Labs Backpack
    Given I should see name Products on Product swag labs page
    When I Click Products Sauce Labs Backpack
    Then I should see details Sauce Labs Backpack
  

    

