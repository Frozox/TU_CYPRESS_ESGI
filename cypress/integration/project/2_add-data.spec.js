import {url_projects} from "../environment";

describe('Bouton création de projet', () => {
    it('should redirect to create view', function () {
        cy.visit(url_projects);

        cy.get('a[class="btn btn-success"]')
            .should("have.attr","href")
            .and('include','/projects/create')
    });
});

describe('Ajoute correctement une ligne en bdd', () => {
    it('shouldCreateNewProject', () => {
        cy.visit(url_projects+"/create")

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

        cy.get('[type="submit"]').click()
    })
})

describe('Prix est une chaine', () => {
    it('shouldReturnCostError"', () => {
        cy.visit(url_projects+"/create")

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

        cy.get('[type="submit"]').click()

        cy.get('.alert').should('contain.text','Le champ cost est obligatoire.')
    })
})

describe('Test d\'injection SQL', () => {
    it('shouldCreateNewProject', () => {
        cy.visit(url_projects+"/create")

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

        cy.get('[type="submit"]').click()
    })
})

describe('Pas d introduction', () => {
    it('shouldReturnIntroductionError', () => {
        cy.visit(url_projects+"/create")

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

        cy.get('[type="submit"]').click()

        cy.get('.alert').should('contain.text','Le champ introduction est obligatoire.')
    })
})

describe('Pas de location', () => {
    it('shouldReturnLocationError', () => {
        cy.visit(url_projects+"/create")

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

        cy.get('[type="submit"]').click()

        cy.get('.alert').should('contain.text','Le champ location est obligatoire.')
    })
})
