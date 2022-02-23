import {address} from "./environment";

const url_test = address+"/projects";

describe('Edition des données', () => {
    it('clicks the link "type"', () => {
        cy.visit(url_test)

        cy.get('form>a').eq(1).click()


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

        cy.contains('Submit').click()
    })
})

describe('Edition d\'une donnée', () => {
    it('clicks the link "type"', () => {
        cy.visit(url_test)

        cy.get('form>a').eq(1).click()


        cy.get('[name=name]')
            .clear()

        cy.get('[name=name]')
            .type('Raph')
            .should('have.value', 'Raph')

        cy.contains('Submit').click()
    })
})

describe('Aucun changement', () => {
    it('clicks the link "type"', () => {
        cy.visit(url_test)

        cy.get('form>a').eq(1).click()

        cy.get('.btn-primary').first().click()
    })
})
