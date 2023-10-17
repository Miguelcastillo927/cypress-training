export class CartElements {
    static get elements(){
     return {
        get placeOrderButton(){
        return cy.contains(" button","Place Order");
       }, 
            verifyProduct( productName){
             return cy.contains("#tbodyid >",  productName)
       }
     }
    }
}