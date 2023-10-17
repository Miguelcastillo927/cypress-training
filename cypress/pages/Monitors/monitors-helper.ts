import { MonitorElements } from "./monitors-elements";

export class MonitorsHelper {
    static clickProductName(productNameM){
        MonitorElements.elements.productLink(productNameM).click();
    }
    static clikOnAddtoCartButton(){
        MonitorElements.elements.addToCart.click();
    }
}