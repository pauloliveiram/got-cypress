it("Validar o método GET do endpoint /houses/{id}", () => {
  cy.request("/houses/10").then((response) => {
    expect(response.status).to.be.eql(200);
    expect(response.body.url).to.include(
      "https://www.anapioficeandfire.com/api/houses/",
    );
    expect(response.body.name).to.be.a("string");
    expect(response.body.region).to.be.a("string");
    expect(response.body.coatOfArms).to.be.a("string");
    expect(response.body.words).to.be.a("string");
    expect(response.body.titles).to.be.an("array");
    expect(response.body.titles[0]).to.be.a("string");
    expect(response.body.seats).to.be.an("array");
    expect(response.body.seats[0]).to.be.a("string");
    expect(response.body.currentLord).to.be.a("string");
    expect(response.body.heir).to.be.a("string");
    expect(response.body.overlord).to.include(
      "https://www.anapioficeandfire.com/api/houses/",
    );
    expect(response.body.founded).to.be.a("string");
    expect(response.body.founder).to.be.a("string");
    expect(response.body.diedOut).to.be.a("string");
    expect(response.body.ancestralWeapons).to.be.an("array");
    expect(response.body.ancestralWeapons[0]).to.be.a("string");
    expect(response.body.cadetBranches).to.be.an("array");
    expect(response.body.swornMembers).to.be.an("array");
  });
});
