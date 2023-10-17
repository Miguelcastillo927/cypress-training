import { Elements2 } from "./elements";

export class downloadpage{
    static visitThePage(){
      cy.visit(Elements2.appUrl)
  }
  static ClickSelectFile(){
    Elements2.selectFile.click()
  } 
  static ClickDownload(){
    Elements2.Download.click()
  }
  static VerifyImg(){
    Elements2.RedFile.should("exist")
  }
  }