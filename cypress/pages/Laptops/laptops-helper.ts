import { LaptopsElements } from "./laptops-elements";


export class LaptopsHelper {
    static clickProductName(productNamel){
        LaptopsElements.elements.productLink(productNamel).click();
    }
    static clikOnAddtoCartButton(){
        LaptopsElements.elements.addToCart.click();
    }
}