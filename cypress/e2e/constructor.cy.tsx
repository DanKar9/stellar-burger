

/// <reference types="cypress" />

describe('Тест на работу конструктора', function () {
  beforeEach(function () {
    cy.intercept('GET', 'api/ingredients', { fixture: 'ingredients.json' });
    cy.viewport(1300, 800);
    cy.visit('http://localhost:4000');
  });

  it('Добавление булки', function () {
    cy.get('[data-cy=bun-ingredients]').contains('Добавить').click();
    cy.get('[data-cy=constructor-bun-1]').contains('Краторная булка N-200i').should('exist');
    cy.get('[data-cy=constructor-bun-2]').contains('Краторная булка N-200i').should('exist');
  })
})

describe('Проверка модального окна', function () {
  beforeEach(function () {
    cy.intercept('GET', 'api/ingredients', { fixture: 'ingredients.json' });
    cy.viewport(1300, 800);
    cy.visit('http://localhost:4000');
  });

  it('Открытие модального окна', function () {
    cy.contains('Краторная булка N-200i').click();
    cy.contains('Детали ингредиента').should('exist');
    cy.get('#modals').contains('Краторная булка N-200i').should('be.visible');
  });

  it('Закрытие модального окна на крестик', function () {
    cy.contains('Краторная булка N-200i').click();
    cy.contains('Детали ингредиента').should('exist');
    cy.get('[data-cy=close-modal]').click();
    cy.contains('Детали ингредиента').should('not.exist');
  });

  it('Закрытие модального окна на оверлей', function () {
    cy.contains('Краторная булка N-200i').click();
    cy.contains('Детали ингредиента').should('exist');
    cy.get('[data-cy=modal-overlay]').click( 'left',{ force: true });
    cy.get('#modals').contains('Краторная булка N-200i').should('not.exist');
  });
});

describe('Создание заказа работает корректно', function () {
  beforeEach(function () {
    cy.intercept('GET', 'api/ingredients', { fixture: 'ingredients.json' });
    cy.intercept('GET', 'api/auth/user', { fixture: 'user.json' });
    cy.intercept('POST', 'api/orders', { fixture: 'post_order.json' })

    window.localStorage.setItem(
      'refreshToken',
      JSON.stringify('my-refresh-token')
    );
    cy.setCookie('accessToken', 'my-access-token');
    cy.visit('/');
  });

  afterEach(function () {
    cy.clearCookies();
    cy.clearLocalStorage();
  });



  it('Оформление заказа бургера', function () {

    cy.get('[data-cy=bun-ingredients]').contains('Добавить').click();
    cy.get('[data-cy=main-ingredients]').contains('Добавить').click();
    cy.get('[data-cy=sauce-ingredients]').contains('Добавить').click();

    cy.contains('Оформить заказ').click();

    cy.get('[data-cy=order-number]').contains('77777').should('exist');

    cy.get('[data-cy=close-modal]').click();
    cy.get('[data-cy=order-number]').should('not.exist');

    cy.get(`[data-cy='constructor']`)
      .contains('Краторная булка N-200i')
      .should('not.exist');
    cy.get(`[data-cy='constructor']`)
      .contains('Соус Spicy-X')
      .should('not.exist');
    cy.get(`[data-cy='constructor']`)
      .contains('Биокотлета из марсианской Магнолии')
      .should('not.exist');
  });
});

