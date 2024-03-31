// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => { 
    cy.visit('/');
        cy.on('uncaught:exception', (err, runnable) => {
            return false
          })
        cy.contains('Sign In').click();
        cy.get('button[role="button"]>i').click()
        cy.get('form[method="POST"]').then(signIn=>{
            cy.wrap(signIn).find('input[name="email"]').type(email);
            cy.wrap(signIn).find('input[name="password"][required]').type(`${password}{enter}`)
        });
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })