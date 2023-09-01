it("Validar o método GET do endpoint /characters", () => {
  cy.request("/characters").then(response => {
    expect(response.status).to.be.eql(200);
    expect(response.body[0].url).to.include("https://www.anapioficeandfire.com/api/characters/");
    expect(response.body[0].name).to.be.a("string");
    expect(response.body[0].gender).to.be.a("string");
    expect(response.body[0].culture).to.be.a("string");
    expect(response.body[0].born).to.be.a("string");
    expect(response.body[0].died).to.be.a("string");
    expect(response.body[0].titles).to.be.an("array");
    expect(response.body[0].titles[0]).to.be.an("string");
    expect(response.body[0].aliases).to.be.an("array");
    expect(response.body[0].aliases[0]).to.be.an("string");
    expect(response.body[0].father).to.be.a("string");
    expect(response.body[0].mother).to.be.a("string");
    expect(response.body[0].spouse).to.be.a("string");
    expect(response.body[0].allegiances).to.be.an("array");
    expect(response.body[0].books).to.be.an("array");
    expect(response.body[0].books[0]).to.include("https://www.anapioficeandfire.com/api/books/");
    expect(response.body[0].povBooks).to.be.an("array");
    expect(response.body[0].tvSeries).to.be.an("array");
    expect(response.body[0].tvSeries[0]).to.be.a("string");
    expect(response.body[0].playedBy).to.be.an("array");
    expect(response.body[0].playedBy[0]).to.be.a("string");
  })
})