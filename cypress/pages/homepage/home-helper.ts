import { homeElements } from "./home-elements";

export class HomeHelper{
    static clickProductName(productName){
        homeElements.elements.productLink(productName).click();
    }
    static clickCategoryLaptop(){
        homeElements.elements.categoryLaptop.click()
    }
    static clickCategoryMonitors(){
        homeElements.elements.categoryMonitors.click()
    }
}