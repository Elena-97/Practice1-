const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

const puppeteer = require('puppeteer');

let browser;
let pag

 

Scenario:1,
Given('the user is on the Trello sign up page', async function () {
    browser = await puppeteer.launch({ headless: false }); 
  page = await browser.newPage(); 
  await page.goto('https://trello.com/signup')
  });
  
  When('the user enters their email, username, and password', function () {
    // Code to enter email, username, and password
  });
  
  When('clicks on the sign up button', function () {
    // Code to simulate button click
  });
  
  Then('the user should receive a confirmation email', function () {
    // Code to verify the email was sent
  });
  Then('should be redirected to the welcome dashboard', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  Scenario:2,
  Given('the user is on the Trello login page', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


  When('the user inputs their valid username and password', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });



  When('clicks on the sign in button', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });



  Then('the user should be redirected to their Trello dashboard', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  Scenario:3,
  Given('the user is logged in and on their profile settings page', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });



  When('the user updates their profile picture and bio', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


  When('clicks on the save button', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });



  Then('the updated profile picture and bio should be visible on the user\'s profile', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


 Scenario:4,

  Given('the user is logged in and on the dashboard', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });



  When('the user clicks on the {string} button', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });



  When('enters a board name and selects a privacy setting', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });



  When('clicks on the create button', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


  Then('a new board with the given name should be created', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });



  Then('visible on the user\'s dashboard', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


 Scenario:5,

  Given('the user is logged in and on the dashboard', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


  When('the user types in the name of an existing board in the search bar', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


  When('presses the enter key', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


  Then('the search results should display the board', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


  Then('the user can select the board from the search results', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


 Scenario:6,

  Given('the user is logged in and viewing an existing board', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


  When('the user clicks on {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });



  When('enters a name for the list', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });



  When('clicks on the save button', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


  Then('the new list should be added to the board', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


 Scenario:7,
  Given('the user is logged in and viewing an existing list in a board', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });



  When('the user clicks on {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });



  When('enters a title and description for the card', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });



  When('clicks on the add button', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


  Then('the card should appear in the list with the specified title and description', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


Scenario:8,

  Given('the user is an admin and currently on the workspace settings page', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });



  When('the user changes the workspace name', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


  When('sets new permissions for members', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  When('clicks on the update button', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


  Then('the workspace name should be updated', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  Then('the permissions settings should be applied to all members of the workspace', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });
