describe ('First Test', () =>{
    it('can navigate to localhost', () => {
        cy.visit('http://localhost:3000/')
        cy.url().should('include', 'localhost')
    })
    it('can navigate to order form', () => {
        cy.visit('http://localhost:3000/pizza')
        cy.url().should('include', 'pizza')
    })
    
    })
describe('Test Name', () => {
    it('can fill in name input', () => {
        cy.get('input[name="name"')
        .type('Ian Brander')
        .should('have.value', 'Ian Brander')
    })
})
describe('Test Checkboxes', () => {
    it('can check multiple boxes', () => {
        cy.get('[type="checkbox"]').check()
        cy.get('[type="checkbox"]').should('be.checked')

    })
})
describe('Can submit the order', () => {
    it('can submit', ()=>{
        cy.get('.submit').click()
        cy.visit('http://localhost:3000/confirmation')
        cy.url().should('include', 'confirmation')
    
    })
})