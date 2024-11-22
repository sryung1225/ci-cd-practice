describe("Basic Path Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it('기본 경로("/")에 "Get started by"라는 텍스트가 존재하는가?', () => {
    cy.contains("Get started by").should("exist"); // 텍스트 존재 검증
  });

  it('기본 경로("/")에 "Learn"라는 anchor heading이 있고, 이 anchor의 href 속성이 정확하게 설정돼 있는가?', () => {
    cy.contains("Learn") // anchor heading 존재
      .should("have.attr", "href") // href 속성 검증
      .and("include", "https://nextjs.org/learn");
  });
});
