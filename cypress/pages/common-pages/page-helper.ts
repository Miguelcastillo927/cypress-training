import { contains } from "cypress/types/jquery";
import { pageConstants } from "./page-constants";
import { pageElements } from "./page-elemenets";

export class pageHelper {
    
    static visitThePage(){
        cy.visit(pageConstants.applicationUrl)
    } 

    static clickOnLogin(){
        pageElements.topMenu.logIn.click();
    }
    static verifyLogin() {
        pageElements.topMenu.nameOfUser.contains("Welcome" );
    }
    static ClickOnHome(){
        pageElements.topMenu.home.click();
    }
    static clickOtocart(){
        pageElements.topMenu.cart.click();
    }

    static visitThePageFill(){
        cy.visit(pageConstants.applicationUrlFill)
    } 
    // static verifyVisitPage(){
    //     pageElements.FillElements.ImageTollsQa.should("be.visible")
    // }
    static insertFirstname(Firstname){
        pageElements.FillElements.FirstName.type(Firstname);
    }
    static insertLastname(LastName){
        pageElements.FillElements.LastName.type(LastName);
    }
    static insertEmail(UserEmail){
        pageElements.FillElements.UserEmail.type(UserEmail);
    }
    static insertGender(){
        pageElements.FillElements.CheckGender.check({ force: true });
    }  
    static insertNumber(UserNumber){
        pageElements.FillElements.UserNumber.type(UserNumber);
    } 
    static insertBirthday(){
        pageElements.FillElements.dateOfBirthInput.click();
    } 
    static insterMonth(){
        pageElements.FillElements.selectmonth.select("December")
    } 
    static insterYear(){
        pageElements.FillElements.selectYear.select("1981")
    } 

    static insertBirthdayB(){
        pageElements.FillElements.dateOfBirthday.click();
    }  
    static insertSubject(Subjects){
        pageElements.FillElements.insertSubject.type(Subjects); 
    }
    static insertHobbies(){
        pageElements.FillElements.checkHobbies.check({ force: true });
    }
    static insertPicture(){
        pageElements.FillElements.insertPicture.click()
    }
    static insertAdress(Adress){
        pageElements.FillElements.insertAdress.type(Adress)
    }


}