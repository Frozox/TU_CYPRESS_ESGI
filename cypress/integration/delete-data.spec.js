import {address} from "./environment";

const url_test = address+"/projects";

describe('Supression de données', () => {
    it('clicks the link "type"', () => {
        cy.visit(url_test)

        cy.get('[title=delete]').first().click()
    })
})
