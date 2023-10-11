describe("Pruebas en DemoBlaze", () => {
     beforeEach(() => { 
      cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })     
      cy.visit("https://www.demoblaze.com/index.html");

      // login to the page

      cy.get("#login2").click();             
      cy.get("#loginusername").type("miguel123",{force:true}); 
      cy.get("#loginpassword").type("123465",{force:true});
      cy.get("#logInModal > div > div > div.modal-footer > button.btn.btn-primary").click();
      
    });
        
    // verify login is correct

      it("verify login is correct", () => {            
           
     cy.contains("Welcome").should("be.visible");
     cy.get("#nameofuser").should("contain", "miguel123");     
     
    });
           
    //verify purchase in the page

    it("verify purchase in the page", () => {
    
    //login
      
    cy.get("#login2").click();              
    cy.get("#loginusername").type("miguel123",{force:true}); 
    cy.get("#loginpassword").type("123465",{force:true});
    cy.get("#logInModal > div > div > div.modal-footer > button.btn.btn-primary").click();            
    
    
    // add the phone
    cy.get("#itemc").click();           
    cy.get("#tbodyid > div:nth-child(1) > div > a > img").click();
    cy.get("#tbodyid > div.row > div > a").click();            
    cy.get("#navbarExample > ul > li.nav-item.active > a").click();

    // add the laptop
    cy.get("a#itemc").eq(1).click();
    cy.get("#tbodyid > div:nth-child(3) > div > div > h4 > a").click();
    cy.get("#tbodyid > div.row > div > a").click();            
    cy.get("#navbarExample > ul > li.nav-item.active > a").click();

    // add the monitor
    cy.get("a#itemc").eq(2).click();
    cy.get("#tbodyid > div:nth-child(1) > div > a > img").click();
    cy.get("#tbodyid > div.row > div > a").click();
    cy.get("#cartur").click();
    cy.contains("Samsung galaxy s6")
    cy.contains("MacBook air")
    cy.contains("Apple monitor 24")

           let priceTotal = 0;
         cy.get("table tbody tr td:nth-child(3)").each(price=>{
             priceTotal += parseInt(price.text());
         })

          // compare the sum the products with that of the page

         cy.then(()=>cy.get("#totalp").should("have.text",priceTotal))

        

        
            
          //make a purshase

           cy.get("#page-wrapper > div > div.col-lg-1 > button").click();
          
           cy.contains("Place order");
           cy.get("#orderModal > div > div > div.modal-body > form > div:nth-child(2)").click();
           cy.get("#name").type("miguel castillo",{force:true});
           cy.get("#country").type("colombia");
           cy.get("#city").type("bogota");
           cy.get("#card").type("242424242424242");
           cy.get("#month").type("122024");
           cy.get("#year").type("987");
           cy.get("#orderModal > div > div > div.modal-footer > button.btn.btn-primary").click();

           // verify if the purshase was succesful

          

          cy.contains("Thank you for your purchase!").should("be.visible");
          // cy.get("div#orderModal").should('include.text', "#name");

           cy.wait(2000)
          cy.get("div .confirm").click();

           // send message
           

            
          });
          it("verify send message", () => {            
           
          cy.get("#navbarExample > ul > li:nth-child(2) > a").click();
           
           cy.get("#recipient-email").click();
           cy.get("#recipient-email").type("miguel@gmail.com",{force:true});
           cy.get("#recipient-name").click();
           cy.get("#recipient-name").type("miguel castillo",{force:true});
           cy.get("#message-text").click();
           cy.get("#message-text").type("message to send",{force:true});
           cy.get("#exampleModal > div > div > div.modal-footer > button.btn.btn-primary").click()

           cy.on("window:alert", (text) => {
            //Verificar el contenido de la alerta
            expect(text).to.contains("Thanks for the message!!");
          });     
            
            });
          

  });
  