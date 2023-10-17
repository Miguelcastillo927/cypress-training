import {  elements } from "./elements";

export class UploadPage {
    
    static visitThePage(){
        cy.visit(elements.applicationUrl)
    } 
    static ClickONSelectFile(){
        elements.SelectFile.click()
    }
    static uploadFile(){
      elements.SelectFile.attachFile( "dev.jpg")
    }
    static ClickUpload(){
      elements.SelectUpload.click()
    }
    static VerifyUpload(){
      elements.VerifyUpload.should("exist")
    }
  }
 
  

  