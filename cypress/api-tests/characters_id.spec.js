it("Validar o método GET do endpoint /characters/{id}", () => {
  cy.request("/characters/823").then(response => {
    expect(response.status).to.be.eql(200);
    expect(response.body.url).to.include("https://www.anapioficeandfire.com/api/characters/");
    expect(response.body.name).to.be.a("string");
    expect(response.body.gender).to.be.a("string");
    expect(response.body.culture).to.be.a("string");
    expect(response.body.born).to.be.a("string");
    expect(response.body.died).to.be.a("string");
    expect(response.body.titles).to.be.an("array");
    expect(response.body.titles[0]).to.be.an("string");
    expect(response.body.aliases).to.be.an("array");
    expect(response.body.aliases[0]).to.be.an("string");
    expect(response.body.father).to.be.a("string");
    expect(response.body.mother).to.be.a("string");
    expect(response.body.spouse).to.be.a("string");
    expect(response.body.allegiances).to.be.an("array");
    expect(response.body.books).to.be.an("array");
    expect(response.body.books[0]).to.include("https://www.anapioficeandfire.com/api/books/");
    expect(response.body.povBooks).to.be.an("array");
    expect(response.body.tvSeries).to.be.an("array");
    expect(response.body.tvSeries[0]).to.be.a("string");
    expect(response.body.playedBy).to.be.an("array");
    expect(response.body.playedBy[0]).to.be.a("string");
  })
})