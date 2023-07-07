Feature: Business rules
  In order to test Swag Labs
  As a Customer
  I want to be able to order items in Swag Labs

  Scenario: from form login Swag Labs input username and password
    Given I input username, password and Click Button Login
    Then I should see Products swag labs page
