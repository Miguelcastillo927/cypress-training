export class elements{
    static get applicationUrl() {
        return  "https://the-internet.herokuapp.com/upload";
      }
     static get SelectFile(){
        return cy.get("#file-upload")
      }
static get SelectUpload(){
    return cy.get("#file-submit")
}
static get VerifyUpload(){
    return cy.get("div h3")
}
      
}
export class Elements2{
    static get appUrl(){
        return "https://demoqa.com/upload-download"
    }
    static get selectFile(){
        return cy.get("#uploadFile")
    }
    static get Download(){
        return cy.get("#downloadButton")
    }
    static get RedFile(){
        return cy.readFile("./cypress/downloads/sampleFile.jpeg")
        
    }
}