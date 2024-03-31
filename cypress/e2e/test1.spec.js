const ModelsPage = require ("../../PageObjects/ModelsPage.js")

describe('Tests using POM', () => {
    before(()=>{
      cy.login(`${Cypress.env('EMAIL')}`, `${Cypress.env('PASSWORD')}`);
      cy.wait(500)
    })
    it('first one', () => {
        ModelsPage.openNewModelFormFromPlus();
        ModelsPage.createNewModel('Test1','AAA');
        cy.url().should('contains', 'aaa');
        cy.get('h1').should('contain.text', 'Test1');
        ModelsPage.openModelsPage();
        cy.contains('Your Work').click()
    })
    //cleaning up all created models
    after(()=>{
      ModelsPage.openModelsPage();
      ModelsPage.viewMyModels();
      ModelsPage.deleteAllModels()
    })
  })