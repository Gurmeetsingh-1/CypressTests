const assertions = require('../../UIEngine/assertions');
const alpsJSON = require('../../Locators/AlpsLocators');
const FinancePage = require('../../Pages/FinancePage');
var financepage = new FinancePage();

describe("Alps Application Expenses Page test scenarios - Expenses/add/delete", function(){
   
    this.beforeEach(() => {
        //Custom command is created to access the application
        cy.AccessUI();
    });

    this.afterEach(() => {
        //Custom command is created to Logout the application
        cy.Logout();
    });

    it("TC01 - Verify that user allows to create new Expenses", function() {
        //Username and password can also be stored in fixture files
        //Custom command is created to Login the application
        cy.Login(alpsJSON.username, alpsJSON.password);
        cy.get('body').then(($body) => {
            if ($body.find(alpsJSON.LoginPageSessionDialogue).length > 0){
                cy.get(alpsJSON.LoginPageSessionDialogue).click();
            }
        });

        //Verify that user successfully logged-in
        assertions.Visible(alpsJSON.HomePageApplicationLogo);
        
        //Navigate to Expenses page
        financepage.gotoExpensesPage();
        
        //Create new expenses under Finance page
        financepage.createNewExpenses("MyExpenses");
        
        //Verify new expenses created
        financepage.verifyExpenses("MyExpenses");
    });

    it("TC02 - Verify that user allows to delete the existing Expenses", function() {
        //Username and password can also be stored in fixture files
        //Custom command is created to Login the application
        cy.Login(alpsJSON.username, alpsJSON.password);
        cy.get('body').then(($body) => {
            if ($body.find(alpsJSON.LoginPageSessionDialogue).length > 0){
                cy.get(alpsJSON.LoginPageSessionDialogue).click();
            }
        });

        //Verify that user successfully logged-in
        assertions.Visible(alpsJSON.HomePageApplicationLogo);
        
        //Navigate to Expenses page
        financepage.gotoExpensesPage();
        
        //Delete the expenses from financepage
        financepage.deleteExpenses("MyExpenses");
    });
});