export class productElements{
    static get elements(){
        return {
            get addToCart(){
                return cy.contains("a", "Add to cart");
            },
        }
    }
}