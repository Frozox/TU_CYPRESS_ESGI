import {url_projects} from "../environment";

describe('Bouton édition de projet', () => {
    it('should redirect to edit view', function () {
        cy.visit(url_projects);

        cy.get('[title=edit]')
            .first()
            .should("have.attr","href")
            .and('include','/edit')
    });
});

describe('Edition des données', () => {
    it('shouldEditAllData', () => {
        cy.visit(url_projects)

        cy.get('[title=edit]')
            .first()
            .click()
            .then(() => {
                cy.get('[name=name]')
                    .clear()

                cy.get('[name=introduction]')
                    .clear()
                cy.get('[name=location]')
                    .clear()
                cy.get('[name=cost]')
                    .clear()

                cy.get('[name=name]')
                    .type('Raph')
                    .should('have.value', 'Raph')

                cy.get('[name=introduction]')
                    .type('Ceci est une introduction')
                    .should('have.value', 'Ceci est une introduction')

                cy.get('[name=location]')
                    .type('Paris')
                    .should('have.value', 'Paris')

                cy.get('[name=cost]')
                    .type('500')
                    .should('have.value', '500')

                cy.get('[type=submit]')
                    .first()
                    .click()
            });
    })
})

describe('Edition d\'une donnée', () => {
    it('shouldEditOneData', () => {
        cy.visit(url_projects)

        cy.get('[title=edit]')
            .first()
            .click()
            .then(() => {
                cy.get('[name=name]')
                    .clear()

                cy.get('[name=name]')
                    .type('Raph')
                    .should('have.value', 'Raph')

                cy.get('[type=submit]')
                    .first()
                    .click()
            })
    })
})

describe('Aucun changement', () => {
    it('shouldNotEdit', () => {
        cy.visit(url_projects)

        cy.get('[title=edit]')
            .first()
            .click()
            .then(() => {
                cy.get('[type=submit]')
                    .first()
                    .click()
            })
    })
})
