import {url_projects} from "../environment";

describe('Visualisation des données', () => {
    beforeEach(() => {
        cy.visit(url_projects);
    });

    it('clicks the link "type"', () => {

        cy.get('form > a[title="show"]').eq(0)
            .should('have.attr','href')
            .and('include','projects')
            .then((href) => {
                cy.visit(href);

                cy.get('a[title="Retour"]')
                    .should('have.attr','href',url_projects)

                cy.get('#main_card')
                    .should('be.visible')
                    .should('have.class','card')

                cy.get('[alt="project_image"]')
                    .should('be.visible')
                    .and(($img) => {
                        expect($img[0].naturalWidth).to.be.greaterThan(0)
                    })

                cy.get("#collapseMap")
                    .should('not.be.visible')

                cy.get('#show_map').click();

                cy.get("#collapseMap")
                    .should('be.visible')
                    .children('div.card')
                    .children('iframe')
                    .should('have.attr','src')
                    .and('include','https://maps.google.com/maps?')
            });
        });
});

