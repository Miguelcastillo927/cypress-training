import { pageHelper } from "../common-pages/page-helper";
import { LoginElements } from "./login-elements";

export class LoginHelper{
    static insertUsername(username){
        LoginElements.elements.username.invoke("val", username);  
    }
    static insertpasword(password) {
        LoginElements.elements.password.invoke("val", password);
    }
    static ClickOnLogin(){
        LoginElements.elements.loginButton.click();
    }
    static Login(username,password){
    pageHelper.clickOnLogin();
    this.insertUsername(username);
    this.insertpasword(password);
    this.ClickOnLogin();
    pageHelper.verifyLogin(username)
    }
}