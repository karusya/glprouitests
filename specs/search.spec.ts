import { browser, element, By, $, $$, Key, ExpectedConditions as EC } from 'protractor'
import { expect } from 'chai';
browser.ignoreSynchronization = true
describe('Search for products', function () {
    it('Should return search results for `Google `', async function () {
        //let searchForm = $('#lst-ib')

        await browser.driver.get('https://www.google.com/')
        await browser.driver.wait(EC.visibilityOf($('img#hplogo')), 2000, 'page has not been uploaded')
        await browser.driver.findElement(By.name('q')).sendKeys('Global Logic')
        
        await browser.driver.findElement(By.css("input[name = 'btnK']")).click()

        //click the first search result
        await browser.driver.findElement(By.css('div#rso> div:nth-child(1) > div > div > div > div.rc >h3 > a')).click();
        expect(await browser.driver.getTitle()).to.equal('Розробка програмного забезпечення Компанія в Україні')
    
    })

   
})
