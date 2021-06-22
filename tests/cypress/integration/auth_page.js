// Copyright (C) 2021 Ibrahem Mouhamad

/// <reference types="cypress" />

describe('Check server availability', () => {
    it('Server web interface is available', () => {
        cy.visit('/');
    });

    it('"/login" contains in the URL', () => {
        cy.url().should('include', '/login');
    });

    it('"Sign in" button is exists', () => {
        cy.get('[type="submit"]');
    });

    it('Check placeholder "Username"', () => {
        cy.get('input').invoke('attr', 'placeholder').should('contain', 'Username');
    });

    it('Check placeholder "Password"', () => {
        cy.get('[type="password"]');
    });

    it('Click to "Sign in" button', () => {
        cy.get('[type="submit"]').click();
        cy.wait(1000);
    });
});