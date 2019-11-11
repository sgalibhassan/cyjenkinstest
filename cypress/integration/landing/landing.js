import { Given } from "cypress-cucumber-preprocessor/steps";

const url = 'https://jarvice-development.k8s.dal1.jarvice.io/';

Given('I open home page', () => {
  cy.visit(url)
})