export class MonitorElements {
    static get elements(){
        return {
            productLink(productNameM){
                return cy.contains("a", productNameM)
        },
        get addToCart(){
            return cy.contains("a", "Add to cart");
        },

            
        }
    }
}