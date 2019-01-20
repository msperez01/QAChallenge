#authenticates the user's google account

  #purpose is to let the user connect to their account
  Feature:authenticateGoogle process
    In order to access google account
    They need to log in

  Scenario: Failed login
    Given on the "login" page
    When submitted "wrongUser" and "wrongPass"
    Then show alert "Something went wrong. Please try again."
    And stay on "login" page

  Scenario: Success login
    Given on the "login" page
    When submitted "correctUser" and "correctPass"
    Then show alert "Welcome back!"
    And go to "home" page
