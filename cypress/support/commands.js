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
// Cypress.Commands.add('login', (email, password) => { ... })
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

Cypress.Commands.add('pagination',(url_href) => {
    cy.get('nav')
        .should('have.attr','role','navigation')

    cy.get('nav ul li[aria-disabled="false"]')
        .should('not.have.class','disabled')
        .children('a')
        .should('have.length',1)
        .should('have.attr','href',url_href);

    cy.get('nav ul li[aria-disabled="true"]')
        .should('have.class','disabled')
        .children('a')
        .should('have.length',1)
        .should('not.have.attr','href');
});
