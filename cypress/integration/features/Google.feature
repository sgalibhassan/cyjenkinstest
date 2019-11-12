Feature: The basic google page test

  I want to open a web page
  
  @focus
  Scenario: Opening a web page
    Given I open Google page
    Then I see "Google" in the title
    