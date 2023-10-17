
import {  LaptopsHelper, LaptopsConstants, MonitorsHelper,MonitorConstants  } from "../pages/index";
import {  HomeHelper, LoginConstants, LoginHelper, productHelper, CartHelper, } from "../pages/index";
import {placeOrderConstants,placeOrderHelper,pageHelper , HomeConstants,} from "../pages/index";


 
 describe("Pruebas en DemoBlaze", () => {
    
   it("navegar a la aplicacion", () => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false }) 
    const username = LoginConstants.testData.username;
    const password = LoginConstants.testData.password;
    const productName = HomeConstants.testData.productName;
    const orderTestData = placeOrderConstants.testData;
    const productNamel = LaptopsConstants.testData.productNamel
    const productNameM = MonitorConstants.testData.productNameM

    pageHelper.visitThePage();
    LoginHelper.Login(username,password)

    pageHelper.ClickOnHome();
    HomeHelper.clickProductName(productName);
    productHelper.clikOnAddtoCartButton();
    pageHelper.ClickOnHome();
    HomeHelper.clickCategoryLaptop();
    LaptopsHelper.clickProductName(productNamel);
    LaptopsHelper.clikOnAddtoCartButton();
    pageHelper.ClickOnHome();
    HomeHelper.clickCategoryMonitors();
    MonitorsHelper.clickProductName(productNameM);
    MonitorsHelper.clikOnAddtoCartButton();

    pageHelper.clickOtocart();
    CartHelper.ClickOnPlaceOrder();
    CartHelper.VerifyProducts(productName);

    placeOrderHelper.instrtName(orderTestData.name)
    placeOrderHelper.insertCountry(orderTestData.country)
    placeOrderHelper.insertcity(orderTestData.city)
    placeOrderHelper.insertCard(orderTestData.card)
    placeOrderHelper.insertMonth(orderTestData.month)
    placeOrderHelper.insertYear(orderTestData.year)
    placeOrderHelper.clickonButtonPurchase()
    placeOrderHelper.verifyPurchase()

    
   });
  
  });