export class placeOrderElements {
     static get elements(){
        return {
         get name(){
            return cy.get("#name")
         },
         get country(){
            return cy.get("#country")
         },
         get city(){
            return cy.get("#city")
         },
         get card(){
            return cy.get("#card")
         },
         get month(){
            return cy.get("#month")
         },
         get year(){
            return cy.get("#year")
         }, 
         get PurchaseButton(){
            return cy.contains("button","Purchase")
         },  
         get PurchaseSuccessCheckMark(){
            return cy.get(".sa-placeholder")
         }             
        }
    }
}