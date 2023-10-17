import { pageHelper } from "../pages";
import { pageConstants } from "../pages/common-pages/page-constants";

describe("Pruebas en demoqa.com", () => {
   

    it("navegar a la aplicacion", () => {

      const testData = pageConstants.testData
      pageHelper.visitThePageFill();
      cy.log("verify")
      // pageHelper.verifyVisitPage();
      pageHelper.insertFirstname(testData.Firstname)
      pageHelper.insertLastname(testData.LastName)
      pageHelper.insertEmail(testData.UserEmail)
      pageHelper.insertGender();
      pageHelper.insertNumber(testData.UserNumber)
      pageHelper.insertBirthday()
      pageHelper.insterMonth()
      pageHelper.insterYear()
      pageHelper.insertBirthdayB()
      pageHelper.insertSubject(testData.Subjects)
      pageHelper.insertHobbies()
      pageHelper.insertPicture()
      pageHelper.insertAdress(testData.Adress)
    });
  });