export class LaptopsElements {
    static get elements(){
        return {
            productLink(productNamel){
                return cy.contains("a", productNamel)
        },
        get addToCart(){
            return cy.contains("a", "Add to cart");
        },

            
        }
    }
}