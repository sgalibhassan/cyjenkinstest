import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

cy.log('cucumber found me');

const url = 'https://google.com'
Given('I open Google page', () => {
  cy.log('going to visit', url);

  cy.visit(url)
})