/*
export const url = process.env.APP_URL;
export const server_port = 81
export const address = url + ":" + server_port;
export const app_name = process.env.APP_NAME;
export const environment = process.env.APP_ENV;
*/
export const url = Cypress.env("URLTEST");
export const server_port = Cypress.env("PORTTEST");
export const address = url + ":" + 81;
export const url_projects = address+"/projects";
