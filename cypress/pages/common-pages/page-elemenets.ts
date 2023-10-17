import { random } from "cypress/types/lodash";

export class pageElements {
    static get topMenu(){
        return{
            get logIn(){return cy.get("#login2")
        },
        get nameOfUser(){
            return cy.get("#nameofuser");
        },
        get home() {
            return cy.contains("a", "Home");
        },
        get cart() {
            return cy.get("#cartur")
        }
        };
    }
    static get FillElements(){
        return {
            get ImageTollsQa(){
                return cy.get('span.text[text="Practice Form"]')

            },
            get FirstName(){
                return cy.get("#firstName")
            },
            get LastName(){
                return cy.get("#lastName")
            },
            get UserEmail(){
                return cy.get("#userEmail")
            },
            get CheckGender(){
                return cy.get("#gender-radio-1")                
            },
            get UserNumber(){
                return cy.get("#userNumber")
            },
            get dateOfBirthInput(){
                return cy.get("#dateOfBirthInput")
            },
            get selectmonth(){
                return cy.get(".react-datepicker__month-select")
            },
            get selectYear(){
                return cy.get(".react-datepicker__year-select")
            },
            get dateOfBirthday(){
                return cy.get('div[role="option"]').eq(8)
            },
            get insertSubject(){
                return cy.get("div.subjects-auto-complete__value-container")
            },
            get checkHobbies(){
                return cy.get("#hobbies-checkbox-1")
            },
            get insertPicture(){
                return cy.get("input#uploadPicture")
            },
            get insertAdress(){
                return cy.get("textarea#currentAddress")
            }
            

        }
    }
}
