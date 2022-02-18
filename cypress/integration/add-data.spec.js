describe('Ajoute correctement une ligne en bdd', () => {
    it('clicks the link "type"', () => {
        cy.visit('http://127.0.0.1:8000/projects')

        cy.get('.btn-success').click()

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
            .type('100')
            .should('have.value', '100')

        cy.contains('Submit').click()
    })
})

describe('Prix est une chaine', () => {
    it('clicks the link "type"', () => {
        cy.visit('http://127.0.0.1:8000/projects')

        cy.get('.btn-success').click()

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
            .type('J\'essaye d\'ecrire un truc')
            .should('have.value', '')

        cy.contains('Submit').click()
    })
})

describe('Test d\'injection SQL', () => {
    it('clicks the link "type"', () => {
        cy.visit('http://127.0.0.1:8000/projects')

        cy.get('.btn-success').click()

        cy.get('[name=name]')
            .type('"OR 1=1')
            .should('have.value', '"OR 1=1')

        cy.get('[name=introduction]')
            .type('Ceci est une introduction')
            .should('have.value', 'Ceci est une introduction')

        cy.get('[name=location]')
            .type('Paris')
            .should('have.value', 'Paris')

        cy.get('[name=cost]')
            .type('100')
            .should('have.value', '100')

        cy.contains('Submit').click()
    })
})

describe('Pas d introduction', () => {
    it('clicks the link "type"', () => {
        cy.visit('http://127.0.0.1:8000/projects')

        cy.get('.btn-success').click()

        cy.get('[name=name]')
            .type('Raph')
            .should('have.value', 'Raph')

        cy.get('[name=introduction]')
            .type(' ')
            .should('have.value', ' ')

        cy.get('[name=location]')
            .type('Paris')
            .should('have.value', 'Paris')

        cy.get('[name=cost]')
            .type('100')
            .should('have.value', '100')

        cy.contains('Submit').click()
    })
})

describe('Pas de location', () => {
    it('clicks the link "type"', () => {
        cy.visit('http://127.0.0.1:8000/projects')

        cy.get('.btn-success').click()

        cy.get('[name=name]')
            .type('Raph')
            .should('have.value', 'Raph')

        cy.get('[name=introduction]')
            .type('azazazazaz')
            .should('have.value', 'azazazazaz')

        cy.get('[name=location]')
            .type(' ')
            .should('have.value', ' ')

        cy.get('[name=cost]')
            .type('100')
            .should('have.value', '100')

        cy.contains('Submit').click()
    })
})