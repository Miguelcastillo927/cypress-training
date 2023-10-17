import { iframe } from "./elemnte-iframe"


const w3schoolUrl = Cypress.env("w3school")

class IframePage{
    constructor(){
    }

    visit(){
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
        cy.visit("https://www.w3schools.com/html/html_iframe.asp")
        cy.frameLoaded(iframe.iframe)  
    }
      
    getFrameTitle(){
        cy.enter(iframe.iframe).then(getBody => {
            getBody().find(iframe.mainTitle).should('contain', 'HTML Tutorial');
          })
    }
    
    goToCssPageInFrame(){
        cy.enter(iframe.iframe).then(getBody => {
            getBody().find(iframe.cssNavBarItem).click();
            getBody().find(iframe.cssNavBarItem).should('have.attr', 'title').and('include', 'CSS Tutorial');          
          })
    }    
}

export default IframePage;