Feature: Login and order Sauce Labs Bike Light Rules
  In order to test Swag Labs
  As a Customer
  I want to order Sauce Labs Bike Light

  Background: 
    Given User already in Login Swag Labs
    When User Input username and passsword
    Then click Login Button
    Then I should see name Products on Product swag labs page
    Given I am on the Swag Labs product page
    When I Click Products Sauce Labs Backpack
    Then I should see details Sauce Labs Backpack
    Then I add a Sauce Labs Backpack to my cart
    Then the cart should contain a Sauce Labs Backpack

Scenario: from Cart Swag Labs I want to Continue Shooping And I want to order Sauce Labs Bike Light
    Given I am on the Swag Labs Cart Page
    When I Click Continue Shooping Button
    Given I am on the Swag Labs product page
    When I click Sauce Labs Bike Light 
    Then I should see details Sauce Labs Bike Light
    Then I add a Sauce Labs Bike Light to my cart
    Then the cart should contain a Sauce Labs Backpack and Sauce Labs Bike Light to my cart
