import {url_projects} from "./environment";

describe('Visualisation des données', () => {
    it('clicks the link "type"', () => {
        cy.visit(url_projects)

        cy.get('form>a').eq(0).click()

        cy.get('.btn-primary').first().click()
    })
})
