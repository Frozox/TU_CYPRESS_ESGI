import {url_projects} from "../environment";
import {shuffle} from "lodash/collection";

describe('correctTableWithItems', () => {
    beforeEach(() => {
        cy.visit(url_projects);
    });

    it('should display_table', function () {
        cy.get('table')
            .should('have.class','table-striped table-bordered table-responsive-lg');

        cy.get('table')
            .children('thead')
            .get('tr[id="tableHeader"] > th')
            .should('have.length',7);

        cy.get('table')
            .children('tbody')
            .children('tr')
            .should('have.length.above',0)
            .should('have.length.below',6);
    });

    it('should have_pagination', function () {
        cy.get('nav')
            .should('have.attr','role','navigation')

        cy.get('nav')
            .children('a')
            .should('have.length',1)
            .should('have.attr','href',url_projects+'?page=2');

        cy.get('nav')
            .children('li')
            .should('have.class','disabled');
    });
});


describe('correctTableWithoutItems', () => {
    beforeEach(() => {
        cy.visit({
            url: url_projects+"?page=999",
        });
    });

    it('should display_table', function () {
        cy.get('table')
            .should('have.class','table-striped table-bordered table-responsive-lg');

        cy.get('table')
            .children('thead')
            .get('tr[id="tableHeader"] > th')
            .should('have.length',7);

        cy.get('table')
            .children('tbody')
            .children('tr')
            .should('have.length',1);

        cy.get('table')
            .children('tbody')
            .children('tr')
            .get('td')
            .should('have.length',1)
            .should('have.class', 'text-danger')
            .should('have.class', 'text-center')
            .should('have.text','Aucune donnée disponible')
    });

    it('should have_pagination', function () {
        cy.get('nav')
            .should('have.attr','role','navigation')

        cy.get('nav')
            .children('a')
            .should('have.length',1)
            .should('have.attr','href',url_projects+'?page=998');

        cy.get('nav')
            .children('li')
            .should('have.class','disabled');
    });
});
