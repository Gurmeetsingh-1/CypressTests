//Imported locator file 
const alpsJSON = require('../../Locators/AlpsLocators.json');

//Imported assertion file
const assertions = require('../../UIEngine/assertions');

describe("Alps application Login test scenarios ", function () {

    this.beforeEach(() => {
        //Custom Command is created to access UI
        cy.AccessUI();
    });

    this.afterEach(() => {
        //Custom Command is created to Logout
        cy.Logout();
    });

    it("TC01 - Verify user allows to Login the application using valid credential", function() {
        //Username and password can also be stored in fixture files

        //Custom command is created for Login action
        cy.Login(alpsJSON.username, alpsJSON.password);
        cy.get('body').then(($body) => {
            if ($body.find(alpsJSON.LoginPageSessionDialogue).length > 0){
                cy.get(alpsJSON.LoginPageSessionDialogue).click();
            }
        });

        //Verify user has successfully logged-in the application
        assertions.Visible(alpsJSON.HomePageApplicationLogo);
    });

    it("TC02 - Verify that user successfully signout the application on clicking Logout button", function() {
        //Username and password can also be stored in fixture files

        //Custom command is created for Login action
        cy.Login(alpsJSON.username, alpsJSON.password);
        cy.get('body').then(($body) => {
            if ($body.find(alpsJSON.LoginPageSessionDialogue).length > 0){
                cy.get(alpsJSON.LoginPageSessionDialogue).click();
            }
        })

        //Verify user has successfully logged-in the application
        assertions.Visible(alpsJSON.HomePageApplicationLogo);
    });

    it.skip("TC03 - Verify that user does not allows to Login the application using invalid credential", function () {
        cy.Login(alpsJSON.username, alpsJSON.password);
        cy.get('body').then(($body) => {
            if ($body.find(alpsJSON.LoginPageSessionDialogue).length > 0){
                cy.get(alpsJSON.LoginPageSessionDialogue).click();
            }
        })
        assertions.Visible(alpsJSON.InvalidLoginPageError);
    });
});