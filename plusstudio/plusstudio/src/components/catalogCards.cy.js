import catalogCards from './catalogCards.vue'

describe('<catalogCards />', () => {
  it('renders', () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(catalogCards)
  })
})