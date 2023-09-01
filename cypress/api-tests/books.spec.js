it("Validar o método GET do endpoint /books", () => {
  cy.request("/books").then((response) => {
    expect(response.status).to.eql(200);
    expect(response.body[0].url).to.include(
      "https://www.anapioficeandfire.com/api/books/",
    );
    expect(response.body[0].name).to.be.a("string");
    expect(response.body[0].isbn).to.be.a("string");
    expect(response.body[0].authors).to.be.an("array");
    expect(response.body[0].authors[0]).to.be.a("string");
    expect(response.body[0].numberOfPages).to.be.a("number");
    expect(response.body[0].publisher).to.be.a("string");
    expect(response.body[0].country).to.be.a("string");
    expect(response.body[0].mediaType).to.be.a("string");
    expect(response.body[0].released).to.be.a("string");
    expect(response.body[0].characters).to.be.an("array");
    expect(response.body[0].characters[0]).to.include(
      "https://www.anapioficeandfire.com/api/characters/",
    );
    expect(response.body[0].povCharacters).to.be.an("array");
    expect(response.body[0].povCharacters[0]).to.include(
      "https://www.anapioficeandfire.com/api/characters/",
    );
  });
});
