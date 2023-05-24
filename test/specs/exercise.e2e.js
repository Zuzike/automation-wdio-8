import {username, password} from './fixtures.js'
// import LoginPage from '../pageobjects/login.page'
// import ApplicationsPage from '../pageobjects/applications.page'

/*describe('Czechitas Login Page', async () => {

    it('should open login page', async () => {

        await browser.reloadSession();

        await browser.url('/prihlaseni');
        // https://team8-2022brno.herokuapp.com/prihlaseni
        await browser.saveScreenshot('login_page.png')
       
        const windowSize = await browser.getWindowSize();
        console.log(windowSize)

        await browser.pause(5000);

    });

});

//LEKCE 3
describe('Czechitas Login Page', async () => {

    it('find element and check edit&visibility', async () => {

        await browser.reloadSession();

        await browser.url('/prihlaseni');
        
        const emailField = $('#email');
        console.log(await emailField.isEnabled());
        console.log(await emailField.isDisplayed());

        const passwField =$('#password');
        console.log(await passwField.isEnabled());
        console.log(await passwField.isDisplayed());

        const submitButton = $('.btn-primary');
        console.log(await submitButton.getText());

        const selectorMsg = $('=Zapomněli jste své heslo?');
        console.log(await selectorMsg.getAttribute('href'));

        await emailField.setValue('da-app.admin@czechitas.cz');
        await passwField.setValue('Czechitas123');
        await submitButton.click();

        const nameField = $('a.dropdown-toggle');
        console.log(await nameField.getAttribute('title'));

        const nameField2 = $('a.dropdown-toggle').$('strong');
        console.log(await nameField2.getText());

        const loginField = $('=Přihlášky')
        await loginField.click();
        await browser.pause(1000);
        console.log('Page title is: ' + await $('h1').getText())

        const rows = $('tbody').$$('tr');
        console.log(await rows.length);
        
         const rows = await $('.dataTable').$('tbody').$$('tr');
        console.log('There are ' + rows.length + ' rows in the table');
        for (const row of rows) {
            const rowText = await row.getText()
            console.log(rowText);
        }
    });

});*/

//LEKCE 4
/*
describe('Czechitas Login Page - login & logout tests', async () => {

    beforeEach (async () =>{
        await browser.reloadSession();
        await browser.url('/prihlaseni');
    });

    it('should return error message', async () => {

        const loginButton = $('.btn-primary');
        await loginButton.click();
        console.log('Title is Přihlášení = ' + await $('h1').getText())

        const emailField = $('#email');
        await emailField.setValue('da-app.admin@czechitas.cz');

        const passwordField = $('#password');
        await passwordField.setValue('blabla');
        
        const loginButton2 = $('.btn-primary');
        await loginButton2.click();
 
        const errorMsgField1 = $('.toast-message');
        console.log('Error message: ' + await errorMsgField1.getText());

        const errorMsgField2 = $('.invalid-feedback');
        console.log('Error message: ' + await errorMsgField2.getText());
    });

    it('should log in', async () => {

        const emailField = $('#email');
        await emailField.setValue('da-app.admin@czechitas.cz');

        const passwordField = $('#password');
        await passwordField.setValue('Czechitas123');

        const loginButton = $('.btn-primary');
        await loginButton.click(); 
        
        await browser.pause(1000);

        const loginCheck = $('a.dropdown-toggle').$('strong');
        console.log(await loginCheck.getText());
    }); 

    it('should log out', async () => {

        const emailField = $('#email');
        await emailField.setValue('da-app.admin@czechitas.cz');
        
        const passwordField = $('#password');
        await passwordField.setValue('Czechitas123');

        const loginButton = $('.btn-primary');
        await loginButton.click(); 
        
        await browser.pause(2000);
        const loginField = $('a.dropdown-toggle');
        await loginField.click();

        const logoutField = $('#logout-link');
        await logoutField.click();
        await browser.pause(1000);
        console.log('Title is Vyberte období akce = ' + await $('h1').getText())
      
    });
});

describe('Czechitas Enrollment Page - tab & filtering tests ', async () => {

    beforeEach (async () =>{
        await browser.reloadSession();
        await browser.url('/prihlaseni');

        const emailField = $('#email');
        await emailField.setValue('da-app.admin@czechitas.cz');
        
        const passwordField = $('#password');
        await passwordField.setValue('Czechitas123');
        
        const loginButton = $('.btn-primary');
        await loginButton.click(); 

        const enrollField = $('=Přihlášky')
        await enrollField.click();
        await browser.pause(1000);
    });

    it('should visit enrolls page & return list', async () => {
        
        const rows = await $('.dataTable').$('tbody').$$('tr');
        for (const row of rows) {
            console.log(await row.getText());
        };
    }); 

    it('should filter enrollments & return list', async () => {

        const searchField = $('input[type="search"]')
        await searchField.setValue('ani')
        await browser.pause(1000);
        
        const filterCheck = await $('.dataTable').$('tbody').$$('tr');
        for (const row of filterCheck) {
            console.log('Filtrované riadky')
            console.log(await row.getText());
        };
    });
});*/

//LEKCE 5
describe('Login Page', async () => {

    beforeEach(async () => {
        await browser.reloadSession();
        await browser.url('/prihlaseni');
    });

    it('should show login form', async () => {
        const emailField = $('#email');
        await expect(emailField).toBeDisplayed();

        const passwordField = $('#password');
        await expect(passwordField).toBeDisplayed();

        const loginButton = $('.btn-primary');
        await expect(loginButton).toBeDisplayed();
        await expect(loginButton).toHaveText('Přihlásit');
        //await expect(await loginButton.getText()).toEqual('Přihlásit');

        const selectorMsg = $('=Zapomněli jste své heslo?');
        await expect(await selectorMsg.getAttribute('href')).toEqual('https://team8-2022brno.herokuapp.com/zapomenute-heslo');
    });

    it('should login with valid credentials', async () => {
        const emailField = $('#email');
        const passwordField = $('#password');
        const loginButton = $('.btn-primary');

        await emailField.setValue(username);
        await passwordField.setValue(password);
        await loginButton.click();

        const userNameDropdown = $('.navbar-right').$('[data-toggle="dropdown"]');
        await expect(await userNameDropdown.getText()).toEqual(userFullName);
    });
});

describe.only('Applications Page', async () => {

    beforeEach(async () => {
        await browser.reloadSession();
        await browser.url('/prihlaseni');
        await $('#email').setValue(username);
        await $('#password').setValue(password);
        await $('.btn-primary').click();
        await $('=Přihlášky').click();
        await browser.pause(1000);
    });

    it('should list all applications', async () => {
        await expect(await $('h1').getText()).toEqual('Přihlášky');

        const rows = await $('.dataTable').$('tbody').$$('tr');
        await expect(rows.length).toEqual(30);

        for (const row of rows) {
            const colons = await row.$$('td');
            await expect(colons[0]).toHaveText(/^(?!\s*$).+/);
            await expect(colons[1]).toHaveText(/(\d{2}.\d{2}.\d{4}|\d{2}.\d{2}. - \d{2}.\d{2}.\d{4})/);
            await expect(colons[2]).toHaveText(['Bankovní převod', 'FKSP', 'Hotově', 'Složenka']);
            await expect(colons[3]).toHaveText(/\d{1,3}(| \d{0,3}) Kč/);
        }
    });

    it.only('should filter in applications', async () => {
        const searchInput = $('input[type="search"]');
        const loading = $('#DataTables_Table_0_processing');
        const searchText = 'ani';

        await searchInput.setValue(searchText);
        await loading.waitForDisplayed({ reverse: true});
        await browser.pause(1000);

        const filteredRows = await $('.dataTable').$('tbody').$$('tr')
        for (const row of filteredRows) {
            //const rowResult = row.getText();
            const cols = await row.$$('td');
         //await expect(cols[0]).toHaveTextContaining(searchText);
         await expect(cols[0]).toHaveTextContaining(searchText, { ignoreCase: true });
        }
    });
});
