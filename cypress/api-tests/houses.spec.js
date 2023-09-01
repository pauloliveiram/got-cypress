it("Validar o método GET do endpoint /houses", () => {
  cy.request("/houses").then(response => {
    expect(response.status).to.be.eql(200);
    expect(response.body[0].url).to.include("https://www.anapioficeandfire.com/api/houses/");
    expect(response.body[0].name).to.be.a("string");
    expect(response.body[0].region).to.be.a("string");
    expect(response.body[0].coatOfArms).to.be.a("string");
    expect(response.body[0].words).to.be.a("string");
    expect(response.body[0].titles).to.be.an("array");
    expect(response.body[0].titles[0]).to.be.a("string");
    expect(response.body[0].seats).to.be.an("array");
    expect(response.body[0].seats[0]).to.be.a("string");
    expect(response.body[0].currentLord).to.be.a("string");
    expect(response.body[0].heir).to.be.a("string");
    expect(response.body[0].overlord).to.include("https://www.anapioficeandfire.com/api/houses/");
    expect(response.body[0].founded).to.be.a("string");
    expect(response.body[0].founder).to.be.a("string");
    expect(response.body[0].diedOut).to.be.a("string");
    expect(response.body[0].ancestralWeapons).to.be.an("array");
    expect(response.body[0].ancestralWeapons[0]).to.be.a("string");
    expect(response.body[0].cadetBranches).to.be.an("array");
    expect(response.body[0].swornMembers).to.be.an("array");
  })
})