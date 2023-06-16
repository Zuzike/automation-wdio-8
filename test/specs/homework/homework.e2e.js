import {username, password} from '../fixtures.js'

//LEKCE 1
/*
describe('Homework', async () => {

    it('should open page and create screenshot', async () => {

        await browser.reloadSession();

        await browser.url('/registrace');
        
        await browser.saveScreenshot('register_page.png')
    });

});
//LEKCE 2
describe('Czechitas Find Elements', async () => {

    it('should open registrace page & find elements', async () => {

        await browser.reloadSession();

        await browser.url('/registrace');

       const wholeNameField = $('input#name');
       console.log(await wholeNameField.getHTML());

       const emailField = $('#email');
       console.log(await emailField.getHTML());

       const passwField = $('[name="password"]]');
       console.log(await passwField.getHTML());

       const passwCheckField = $('#password-confirm');
       console.log(await passwCheckField.getHTML());

       const registrationButton = $('button.btn-primary');
       console.log(await registrationButton.getText());
            
    });

});

//LEKCE 3
describe('Homework', async () => {

    it('should login on registration page', async () => {

        await browser.reloadSession();

        await browser.url('/registrace');
        
       const wholeNameField = $('input#name');
       await wholeNameField.setValue('Boba Domáca');

       const emailField = $('#email');
       await emailField.setValue('boba@gmail.com');

       const passwField = $('[name="password"]');
       await passwField.setValue('heslo123')

       const passwCheckField = $('#password-confirm');
       await passwCheckField.setValue('heslo123')

       const registrationButton = $('button.btn-primary');
       await registrationButton.click();

    });
});

//LEKCE 4

describe('Homework - registration success', async () => {

    beforeEach(async ()=>{
        await browser.reloadSession();
        await browser.url('/registrace');
    });

    it('open registration page and check', async () => {
        
        const wholeNameField = $('input#name');
        const emailField = $('#email');
        const passwField = $('[name="password"]');
        const passwCheckField = $('#password-confirm');
        const registrationButton = $('button.btn-primary');

        console.log('Name field visibility status: ' + await wholeNameField.isDisplayed());
        console.log('Name field activation status:' + await wholeNameField.isEnabled());
        
        console.log('Email field visibility status: ' + await emailField.isDisplayed());
        console.log('Email field activation status: ' + await emailField.isEnabled());

        console.log('Password field visibility status: ' + await passwField.isDisplayed());
        console.log('Password field activation status: ' + await passwField.isEnabled());

        console.log('PasswordControl field visibility status: ' + await passwCheckField.isDisplayed());
        console.log('PasswordControl field activation status: ' + await passwCheckField.isEnabled());

        console.log('Button visibility: ' + await registrationButton.isDisplayed());
        console.log('Button activation: ' + await registrationButton.isEnabled());
    });
    
    it('user registration and validity check', async () => {

        const wholeNameField = $('input#name');
        await wholeNameField.setValue('Bobana Domáca');
 
        const emailField = $('#email');
        await emailField.setValue('bobana@gmail.com');
 
        const passwField = $('#password');
        await passwField.setValue('Heslo123')
 
        const passwCheckField = $('#password-confirm');
        await passwCheckField.setValue('Heslo123')
 
        const registrationButton = $('button.btn-primary');
        await registrationButton.click();

        const userNameDropdown = $('.navbar-right').$('[data-toggle="dropdown"]');
        console.log('User currently logged in: ' + await userNameDropdown.getText());

        //const userNameDropdown2 = $('.dropdown').$('span');

    });
});

describe('Homework - registration failur', async () => {

    beforeEach(async ()=>{
        await browser.reloadSession();
        await browser.url('/registrace');
    });

    it('user registration with existing email and feedback', async () => {

        const wholeNameField = $('input#name');
        await wholeNameField.setValue('Czechitová Janka');
 
        const emailField = $('#email');
        await emailField.setValue('da-app.admin@czechitas.cz');
 
        const passwField = $('input#password');
        await passwField.setValue('CzHeslo1234')
 
        const passwCheckField = $('#password-confirm');
        await passwCheckField.setValue('CzHeslo1234')
 
        const registrationButton = $('button.btn-primary');
        await registrationButton.click();

        const feedbackAlert = $('.invalid-feedback');
        console.log('Alert: ' + await feedbackAlert.getText());

    });

    it('user registration with invalid password and feedback', async () => {

        const wholeNameField = $('input#name');
        await wholeNameField.setValue('Ja Somsom');
 
        const emailField = $('#email');
        await emailField.setValue('mammail@gmail.com');
 
        const passwField = $('[name="password"]');
        await passwField.setValue('123451234')
 
        const passwCheckField = $('#password-confirm');
        await passwCheckField.setValue('123451234')
 
        const registrationButton = $('button.btn-primary');
        await registrationButton.click();
        
        const feedbackAlert = $('.invalid-feedback');
        console.log('Alert: ' + await feedbackAlert.getText());

    });
});

//LEKCE 5
describe('Homework - registration success', async () => {

    beforeEach(async ()=>{
        await browser.reloadSession();
        await browser.url('/registrace');
    });

    it('open registration page and check', async () => {
        
        const wholeNameField = $('input#name');
        const emailField = $('#email');
        const passwField = $('[name="password"]');
        const passwCheckField = $('#password-confirm');
        const registrationButton = $('button.btn-primary');

        await expect(wholeNameField).toBeDisplayed();
        await expect(wholeNameField).toBeEnabled();

        await expect(emailField).toBeDisplayed();
        await expect(emailField).toBeEnabled();

        await expect(passwField).toBeDisplayed();
        await expect(passwField).toBeEnabled();

        await expect(passwCheckField).toBeDisplayed();
        await expect(passwCheckField).toBeEnabled();

        await expect(registrationButton).toBeDisplayed();
        await expect(registrationButton).toBeClickable();
    });
    
    xit('user registration and validity check', async () => {

        const wholeNameField = $('input#name');
        await wholeNameField.setValue('Solo Lomos');
 
        const emailField = $('#email');
        await emailField.setValue('solo@gmail.com');
 
        const passwField = $('#password');
        await passwField.setValue('Heslo123')
 
        const passwCheckField = $('#password-confirm');
        await passwCheckField.setValue('Heslo123')
 
        const registrationButton = $('button.btn-primary');
        await registrationButton.click();

        const loggedUser = $('.navbar-right').$('[data-toggle="dropdown"]');
        await expect(await loggedUser.getText()).toEqual('Solo Lomos');
    });
});

describe('Homework - registration failur', async () => {

    beforeEach(async ()=>{
        await browser.reloadSession();
        await browser.url('/registrace');
    });

    it('user registration with existing email and feedback', async () => {

        const wholeNameField = $('input#name');
        await wholeNameField.setValue('Czechitová Janka');
 
        const emailField = $('#email');
        await emailField.setValue('da-app.admin@czechitas.cz');
 
        const passwField = $('input#password');
        await passwField.setValue('CzHeslo1234')
 
        const passwCheckField = $('#password-confirm');
        await passwCheckField.setValue('CzHeslo1234')
 
        const registrationButton = $('button.btn-primary');
        await registrationButton.click();

        const feedbackAlert = $('.invalid-feedback');
        await expect (feedbackAlert).toHaveText('Účet s tímto emailem již existuje');

    });

    it('user registration with invalid password and feedback', async () => {

        const wholeNameField = $('input#name');
        await wholeNameField.setValue('Ja Somsom');
 
        const emailField = $('#email');
        await emailField.setValue('mammail@gmail.com');
 
        const passwField = $('[name="password"]');
        await passwField.setValue('123451234')
 
        const passwCheckField = $('#password-confirm');
        await passwCheckField.setValue('123451234')
 
        const registrationButton = $('button.btn-primary');
        await registrationButton.click();
        
        const feedbackAlert = $('.invalid-feedback');
        await expect (feedbackAlert).toHaveText('Heslo musí obsahovat minimálně 6 znaků, velké i malé písmeno a číslici');
    });
});*/

//LEKCE 6

