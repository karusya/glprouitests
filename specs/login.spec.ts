import { browser, element, By, $, $$, Key, ExpectedConditions as EC } from 'protractor'
import { expect } from 'chai';
import { LoginPage } from '../pages/login';
import user from '../models/user';
import { AdminPage } from '../pages/admin';
import * as log4js from 'log4js';

//browser.ignoreSynchronization = true

describe('Login to Admin panel', async() =>{
    const logger = log4js.getLogger('SpecLogger')
    const loginPage =  new LoginPage()
    const adminPage = new AdminPage()
    beforeEach(async() => {
    browser.waitForAngularEnabled(false)
       await browser.get('http://localhost/litecart/admin/login.php', 2000)
    })

    it('should go to admin page on sucessfull login', async()=> {
        const adminPage = new AdminPage()
        await loginPage.loginAs(user.adminUser)   
        await adminPage.loaded()
        expect(await browser.getCurrentUrl()).to.equal(adminPage.url)
        
    })
})

  

  