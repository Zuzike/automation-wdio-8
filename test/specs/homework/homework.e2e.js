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

       const passwField = $('[name="password"]]');
       await passwField.setValue('heslo123')

       const passwCheckField = $('#password-confirm');
       await passwCheckField.setValue('heslo123')

       const registrationButton = $('button.btn-primary');
       await registrationButton.click();

    });

});*/

//LEKCE 4

