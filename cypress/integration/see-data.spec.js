import {address} from "./environment";

const url_test = address+"/projects";

describe('Visualisation des données', () => {
    it('clicks the link "type"', () => {
        cy.visit(url_test)

        cy.get('form>a').eq(0).click()

        cy.get('.btn-primary').first().click()
    })
})
