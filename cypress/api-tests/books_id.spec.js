it("Validar o método GET do endpoint /books/{id}", () => {
  cy.request("/books/1").then(response => {
    expect(response.status).to.eql(200);
    expect(response.body.url).to.include("https://www.anapioficeandfire.com/api/books/");
    expect(response.body.name).to.be.a("string");
    expect(response.body.isbn).to.be.a("string");
    expect(response.body.authors).to.be.an("array");
    expect(response.body.authors[0]).to.be.a("string");
    expect(response.body.numberOfPages).to.be.a("number");
    expect(response.body.publisher).to.be.a("string");
    expect(response.body.country).to.be.a("string");
    expect(response.body.mediaType).to.be.a("string");
    expect(response.body.released).to.be.a("string");
    expect(response.body.characters).to.be.an("array");
    expect(response.body.characters[0]).to.include("https://www.anapioficeandfire.com/api/characters/");
    expect(response.body.povCharacters).to.be.an("array");
    expect(response.body.povCharacters[0]).to.include("https://www.anapioficeandfire.com/api/characters/");
  })
})
