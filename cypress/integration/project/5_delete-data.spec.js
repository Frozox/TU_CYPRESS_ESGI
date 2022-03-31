import {url_projects} from "../environment";

describe('Supression de données', () => {
    it('shouldDeleteFirstProject', () => {
        cy.visit(url_projects)
        cy.get('[title=delete]')
            .first()
            .click()

        cy.get('.alert-success')
            .should('be.visible')
            .and('contain.text','Projet supprimé avec succès')
    });
});
