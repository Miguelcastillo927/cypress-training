import { CartElements } from "./cart-elements";

export class CartHelper{
    static ClickOnPlaceOrder(){
        CartElements.elements.placeOrderButton.click();
    }
    static VerifyProducts(productName){
        CartElements.elements.verifyProduct(productName).should("exist")
    }

}