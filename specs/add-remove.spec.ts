import { browser, element, By, $, $$, Key, ExpectedConditions as EC } from 'protractor'
import { expect } from 'chai';
import { LoginPage } from '../pages/login';
import user from '../models/user';
import { AdminPage } from '../pages/admin';
import * as log4js from 'log4js';
import product from '../models/product';
import { CatalogPage } from '../pages/catalog';
import { MainPage } from '../pages/main';
import { CartPage } from '../pages/cart';
browser.ignoreSynchronization = true;

describe('Adding new product to admin panel', async() =>{
    let catalogPage = new CatalogPage()
    let mainPage = new MainPage()
    beforeEach(async() => {
        browser.waitForAngularEnabled(false)
        await browser.get('http://localhost/litecart/admin/', 2000)
     })
    
    it('product can be added to the admin panel', async ()=>{
        await catalogPage.openCatalog()
        await catalogPage.addClick()
        await catalogPage.fillGeneralTab(product.testProduct)
        await catalogPage.imageUpload()
        await catalogPage.enableProduct()
        await catalogPage.clickPriceTab()
        await catalogPage.fillPriceTab(product.testProduct)
        await catalogPage.fillStockTab()
        expect(await catalogPage.getSuccess()).to.equal('×\nChanges saved successfully')
        
    })  
    
    xit('product appears in catalog list ', async  ()=>{
        //const PRODUCT_NAME = product.testProduct.name
        await catalogPage.openCatalog()
        await catalogPage.searchFor(name)
        
        expect(catalogPage.inResults(name)).to.be.true
       
    })
    
})

describe('Adding product to the cart', async()=>{
    let mainPage = new MainPage()
    let cartPage = new CartPage()
    beforeEach(async() => {
        browser.waitForAngularEnabled(false)
        await browser.get('http://localhost/litecart/en/', 2000)
     })
    it('product can be added to the cart', async  ()=>{
       
        let startCount = await mainPage.countCart()
        await mainPage.openLatest()
        await mainPage.openProduct()
        await mainPage.addToCart(1)
        let addedCount = await mainPage.countCart()
        browser.wait(()=>{
            return addedCount != startCount
        }, 1000)
        expect(await mainPage.countCart()).to.equal('1')
        
    
    })

    xit('product can be removed from the cart ', async ()=>{
        await mainPage.openCart()
        await cartPage.removeAllProducts()
        
        //expect(await cartPage)
    })
})

