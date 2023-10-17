export class homeElements{
    static get elements(){
        return {
            productLink(productName){
                return cy.contains("a", productName)
        },
             get categoryLaptop(){
                return cy.contains("a","Laptops")
            },
            get categoryMonitors(){
                return cy.contains("a","Monitors")
            }
        }
    }
}