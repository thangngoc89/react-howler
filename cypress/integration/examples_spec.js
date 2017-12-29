describe("Examples", function() {
  it("it should go to home page", function() {
    cy.visit("http://localhost:3000");
    cy.title().should("include", "React Howler");
    cy.title().should("include", "Examples");
  });
  it("should contains 6 example sections", () => {
    cy.get(".players > section").should($p => {
      expect($p).to.have.length(6);
    });
    cy.contains("Simple Player");
    cy.contains("AutoPlay");
    cy.contains("Preload Disabled");
    cy.contains("Swap Source");
    cy.contains("Full Control");
    cy.contains("Global Howler Object");
  });
});

describe("Full control", () => {
  it("Play -> Pause -> Stop", () => {
    cy.get(".full-control").contains("Play");
    cy.get(".full-control").contains("0.00");
    cy.get("#player_play_pause").click();
    cy.get(".full-control").contains("Pause");
    cy.wait(100);
    cy.get("#player_play_pause").click();
    cy.get("#player_status").should($p => {
      expect($p.text()).to.not.contain("0.00");
    });
    cy.get(".full-control").contains("Play");
    cy.get("#player_stop").click();
    cy.get("#player_status").should($p => {
      expect($p.text()).to.contain("0.00");
    });
  });
});
