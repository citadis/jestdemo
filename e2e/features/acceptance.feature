# Acceptance Tests
Feature: Title check
  I should be able to go to a website and check its title

Scenario: Get the title of webpage
  Given I go to the website "/"
  Then I expect the title of the page "Countdown Timer"
