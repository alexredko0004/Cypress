export default class ModelsPage {
    static openNewModelFormFromPlus(){
        cy.visit('/');
        cy.get('button>svg').click();
        cy.get('ul[role="menu"]').then(plusMenuItems=>{
            cy.wrap(plusMenuItems).contains('New Model').click()
        })
        cy.url().should('eq', 'https://www.kaggle.com/models?new=true');
    }
    static openModelsPage(){
        cy.visit('/');
        cy.get('[data-click-log-id="models"]').click();
        cy.url().should('eq', 'https://www.kaggle.com/models');
    }
    static createNewModel(name,urlName){
        const modelName = name+(Math.floor(Math.random(10000)*200));
        const newUrl = urlName+(Math.floor(Math.random(10000)*200));
        cy.get('[placeholder="Enter model title"]').type(modelName);
        cy.get('span[role="button"]').click();
        cy.get('input.mdc-text-field__input').eq(1).clear();
        cy.get('input.mdc-text-field__input').eq(1).type(newUrl);
        cy.contains('Create model').click();
        cy.contains('Go to model detail page').click()
    }
    static viewMyModels(){
        cy.visit('https://www.kaggle.com/work/models');
    }
    static deleteAllModels(){
        cy.get('input[type="checkbox"]').eq(0).click();
        cy.get('[aria-label="Delete selected items"]').click();
        cy.get('[data-testid="CheckBoxOutlineBlankIcon"]').click({force:true});
        cy.contains('Continue').click();
        cy.get('button[emphasis="high"]').click()
    }
}