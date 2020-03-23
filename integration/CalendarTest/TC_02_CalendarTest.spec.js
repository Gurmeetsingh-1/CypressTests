//Import file to access the assertion method
const assertions = require('../../UIEngine/assertions');

//Import locators
const alpsJSON = require('../../Locators/AlpsLocators')

//Import calendar page methods
const calendarPage = require('../../Pages/CalendarPage')

const basicUtility = require('../../UIEngine/BasicUtility')
var appointmentName = "";

//create calendar page object
var calendarpage = new calendarPage();

describe("Alsp Application Calendar page test scenarios - Appointments/add/delete", function(){
   
    this.beforeEach(() => {
        //Custom command is created to accesss UI
        cy.AccessUI();
    });

    this.afterEach(() => {
        //Custom command is created to Logout UI
        cy.Logout();
    });

    it("TC01 - Verify that user allows to create appointment for current date", function() {
        //Username and password can also be stored in fixture files

        //Custom command is created to Login the application
        cy.Login(alpsJSON.username, alpsJSON.password);
        cy.get('body').then(($body) => {
            if ($body.find(alpsJSON.LoginPageSessionDialogue).length > 0){
                cy.get(alpsJSON.LoginPageSessionDialogue).click();
            }
        });

        //Verify user is logged in to the application
        assertions.Visible(alpsJSON.HomePageApplicationLogo);
        
        //Generate random numbers to create unique appointment
        appointmentName = basicUtility.RandomNumbers();

        //Create appointment from calendar page
        calendarpage.createAppointment(appointmentName);
        
        //Verify appointment created
        calendarpage.verifyAppointment(appointmentName);
    });

    it("TC02 - Verify that user allows to delete the appointment for current date", function() {
        //Username and password can also be stored in fixture files

        //Custom command is created to Login the application
        cy.Login(alpsJSON.username, alpsJSON.password);
        cy.get('body').then(($body) => {
            if ($body.find(alpsJSON.LoginPageSessionDialogue).length > 0){
                cy.get(alpsJSON.LoginPageSessionDialogue).click();
            }
        });

        //Verify user is logged in to the application
        assertions.Visible(alpsJSON.HomePageApplicationLogo);
        
        //Delete appointment from calendar page
        calendarpage.deleteAppointment(appointmentName);
    });
});