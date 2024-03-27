describe('search for vehicles', () => {
  beforeEach(()=>{
    cy.visit('https://auto.ria.com/uk');
  })
  it('Cars', () => {
    cy.get('button[type="submit"]').click();
    cy.url().should('contains', 'https://auto.ria.com/uk/legkovie/');
    cy.get('div[title="Тип кузова"] .more-checkbox [title="Седан"]').click();
    cy.get('div[title="Тип кузова"] .more-checkbox [title="Мінівен"]').click();
    cy.get('select#brandTooltipYearGte_0').select('2020');
    cy.get('div[title="Тип кузова"] input[type="checkbox"]').should('be.checked')


  })
  it('Moto', () => {
    cy.get('select#categories').select('Мото')
    cy.get('button[type="submit"]').click();
    cy.url().should('contains', 'https://auto.ria.com/uk/moto/');
  })
})