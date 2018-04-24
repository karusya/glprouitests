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
       // let categories = $$('div#box-apps-menu-wrapper > ul#box-apps-menu> li > a[href]')
        /*categories.map(link =>{
            return link.getAttribute('href').then(href =>{
                return href.replace(/https\:\/\/app\.perflectie\.nl\//g, 'http://localhost/litecart/admin/')
                console.log(href)
            });
        }).then(links =>{
            links.forEach(link=>{
                //browser.get(link)
            })
        })
        })*/
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
        //console.log(categories.forEach().getAttribute('href'))
        //expect(categories).to.contain('http://localhost/litecart/admin/?app=appearance & doc=template')
        /*let categories = $$('div#box-apps-menu-wrapper > ul#box-apps-menu> li > a')
        categories.map(function(link) {
            return link.getAttribute("href").then(function (href) {
                return href
                console.log(href)
            })
        }).then(function(links) {
            links.forEach(function(link) {
                this.link.click()
                console.log(link)
            })*/
    
    


    /*categories.map( function (link) {
        it('should read from an external json', function(){
           // element(By.css(link))
           console.log(link.getAttribute('href'))
        })*/

        
    

