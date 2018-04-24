import { browser, element, By, $, $$, Key, ExpectedConditions as EC } from 'protractor'
import { expect } from 'chai';
import { LoginPage } from '../pages/login';
import user from '../models/user';
import { AdminPage } from '../pages/admin';
import * as log4js from 'log4js';
//browser.ignoreSynchronization = true

describe('Click on each menu item category', async () => {
    const logger = log4js.getLogger('SpecLogger')
    const loginPage =  new LoginPage()
    const adminPage = new AdminPage()
    
    //let categoriesLinks = categories.getAttribute('href')
    
    beforeEach(async()=>{
        browser.waitForAngularEnabled(false)
       
    })
    xit('should', async function(){
      
        await browser.get('http://localhost/litecart/admin/', 2000)
        let linksList : any= []
        linksList = $$('div#box-apps-menu-wrapper > ul#box-apps-menu> li ')
        linksList.each(function(link) {
            link.getAttribute('a[href]').then(function(hyperlink) {
                console.log(hyperlink)
                browser.get(hyperlink)

            })
        })
    })
})
       