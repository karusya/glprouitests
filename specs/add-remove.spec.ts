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
        await catalogPage.addNewProduct()
        await catalogPage.fillGeneralTab(product.testProduct)
        await catalogPage.imageUpload()
        await catalogPage.enableProduct()
        expect(await catalogPage.getSuccess()).to.equal('×\nChanges saved successfully')
        
    })  
    
    it('product appears in catalog list ', async  ()=>{
        const PRODUCT_NAME = product.testProduct.name
        await catalogPage.openCatalog()
        await catalogPage.searchFor(PRODUCT_NAME)
        
        //expect(catalogPage.inResults(PRODUCT_NAME)).to.be.true
       
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
        await mainPage.addToCart()
        let addedCount = await mainPage.countCart()
        browser.wait(()=>{
            return addedCount != startCount
        }, 1000)
        console.log('4')
        //expect(await mainPage.countCart()).to.equal('1')
        
    
    })

    xit('product can be removed from the cart ', async ()=>{
        await mainPage.openCart()
        await cartPage.removeAllProducts()
        
    })
})

