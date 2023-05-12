// https://on.cypress.io/api

describe('My First Test', () => {
  it('visits the app root url', () => {
    // cy => cypress 객체
    // localhost:0000 포트에 접속한다
    cy.visit('/')
    // 접속한 페이지 내 렌더링된 엘리먼튿을 중에서
    // h1태그는 you did it!이라는 문자열을 포함하고 있다.
    cy.contains('h1', 'todos')
  })
})
