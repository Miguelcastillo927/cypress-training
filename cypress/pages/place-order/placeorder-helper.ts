
import { placeOrderElements } from "./placeorder-elements";

export class placeOrderHelper {
    static instrtName(name){
        placeOrderElements.elements.name.type(name);
    }
    static insertCountry(country){
        placeOrderElements.elements.country.type(country);
    }
    static insertcity(city){
        placeOrderElements.elements.city.type(city);
    }
    static insertCard(card){
        placeOrderElements.elements.card.type(card);
    }
    static insertMonth(month){
        placeOrderElements.elements.month.type(month);
    }
    static insertYear(year){
        placeOrderElements.elements.year.type(year);
    }
    static clickonButtonPurchase(){
        placeOrderElements.elements.PurchaseButton.click();
    }
    static verifyPurchase(){
        placeOrderElements.elements.PurchaseSuccessCheckMark.should("exist");
    }
}