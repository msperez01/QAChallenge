# to run cucumber:
# C:\Users\Berna\FullScreenQAChall\node_modules\.bin\cucumber-js
Feature: Addition

  Addition is great as a verification exercise to get the Cucumber-js infrastructure up and running

  Scenario: Add two number
    Given the numbers 1 and 3
    When they are added together
    Then the result should be 4
