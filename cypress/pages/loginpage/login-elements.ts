export class LoginElements{

    static get elements(){
     return {
        get username () {
           return cy.get("#loginusername");
        },
        get password () {
            return cy.get("#loginpassword")
        },
        get loginButton(){
            return cy.contains("button", "Log in");
        },
    };

      
    }
}