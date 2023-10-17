import { downloadpage } from "../pages/upload-download/download.page";
import { Uplaadpage2, UploadPage } from "../pages/upload-download/upload.page";


describe("Pruebas en herokuapp.com", () => {
   

    it("navegar a la aplicacion", () => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false }) 
        
        UploadPage.visitThePage()
        UploadPage.ClickONSelectFile()
        UploadPage.uploadFile()
        UploadPage.ClickUpload()
        UploadPage.VerifyUpload()

    });
});

describe("Pruebas en herokuapp.com", () => {
   

    it("navegar a la aplicacion", () => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false }) 
        
        downloadpage.visitThePage()
        // downloadpage.ClickSelectFile()
        downloadpage.ClickDownload()
        downloadpage.VerifyImg()
        
    });
});