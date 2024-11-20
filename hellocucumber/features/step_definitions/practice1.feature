Feature: Trello  
  As a potential user
  I want to use a Trello app
  So that I can organize my projects and tasks

Scenario: User signs up for a new Trello account
  Given the user is on the Trello sign up page
  When the user enters their email, username, and password
  And clicks on the sign up button
  Then the user should receive a confirmation email
  And should be redirected to the welcome dashboard

Scenario: User signs into their Trello account
  Given the user is on the Trello login page
  When the user inputs their valid username and password
  And clicks on the sign in button
  Then the user should be redirected to their Trello dashboard

Scenario: User edits their profile information
  Given the user is logged in and on their profile settings page
  When the user updates their profile picture and bio
  And clicks on the save button
  Then the updated profile picture and bio should be visible on the user's profile

Scenario: User creates a new board
  Given the user is logged in and on the dashboard
  When the user clicks on the "Create new board" button
  And enters a board name and selects a privacy setting
  And clicks on the create button
  Then a new board with the given name should be created
  And visible on the user's dashboard

Scenario: User searches for an existing board by name
  Given the user is logged in and on the dashboard
  When the user types in the name of an existing board in the search bar
  And presses the enter key
  Then the search results should display the board
  And the user can select the board from the search results

Scenario: User creates a list in a board
  Given the user is logged in and viewing an existing board
  When the user clicks on "Add a list"
  And enters a name for the list
  And clicks on the save button
  Then the new list should be added to the board

Scenario: User adds a card to a list
  Given the user is logged in and viewing an existing list in a board
  When the user clicks on "Add a card"
  And enters a title and description for the card
  And clicks on the add button
  Then the card should appear in the list with the specified title and description

Scenario: User edits the workspace settings
  Given the user is an admin and currently on the workspace settings page
  When the user changes the workspace name
  And sets new permissions for members
  And clicks on the update button
  Then the workspace name should be updated
  And the permissions settings should be applied to all members of the workspace