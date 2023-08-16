describe("verificar navegacion pagina hoteles", ()=>{
beforeEach(()=>{
    cy.visit("https://erazopa.github.io/hotels/");

});
it("verificar que salgan todas las 18 cards", ()=>{
    cy.get(".card").should("have.length", 18)

});
it("verificar el buen funcionamiento del filtro precios",()=>{
    cy.get("#filter-price").select("$").should("have.value", 1);
    cy.get(".Hotel_price").should("have.length",3)
    cy.get("#filter-price").select("$$").should("have.value", 2);
    cy.get(".Hotel_price").should("have.length",4)
    cy.get("#filter-price").select("$$$").should("have.value", 3);
    cy.get(".Hotel_price").should("have.length",2)
    cy.get("#filter-price").select("$$$$").should("have.value", 4);
    cy.get(".Hotel_price").should("have.length",9)
    cy.get("#filter-price").select("All prices").should("have.value", 0);
    cy.get(".Hotel_price").should("have.length",18)
});
it("verificar que el boton clear funcione e imprima todas las cartas nuevamente",()=>{
    cy.get("button:contains('Clear')").click();
    cy.get(".card").should("have.length", 18)    
})

});

    
    
    
    
    

