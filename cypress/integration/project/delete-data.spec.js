import {url_projects} from "./environment";

describe('Supression de données', () => {
    it('clicks the link "type"', () => {
        cy.visit(url_projects)
        cy.get('[title=delete]')
            .first()
            .click()

        cy.get('.alert-success')
            .should('be.visible')
    });
});
