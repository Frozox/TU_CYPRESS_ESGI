import {address} from "../environment";

const url_test = address+"/projects";

describe('indexProjects', () => {
    beforeEach(() => {
        cy.visit(url_test);
    })

    it('should display_table', function () {
        const table = cy.get('table');
        table.should('have.class','table-striped table-bordered table-responsive-lg');

        const thead = table.children('thead');
        thead.should('be.visible');
        thead.get('tr[id="tableHeader"] > th').should('have.length',7);

        const tbody = table.children('tbody');
        tbody.should('be.visible');
        tbody.get('tr').should('have.length.above',0);
        tbody.get('tr').should('have.length.below',6);
        /*
        tbody.contains('tr').each(element => {
           element
        });*/
        //tbody.contains('tr').should('have.length.above',0);
        //tbody.contains('tr').should('have.length.below',3);
    });

    it('should have_pagination', function () {
        cy.get('nav').should('have.attr','role','navigation')
    });
});
