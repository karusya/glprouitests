import {
  browser,
  $,
  $$,
  element,
  by,
  Key,
  ExpectedConditions as EC,
  protractor,
} from 'protractor';
import {async} from 'q';
import * as log4js from 'log4js';
import {BasePage} from './base';
var path = require('path');

/**
 * Class creates a new catalog page
 * @extends BasePage
 */
 

export class CatalogPage extends BasePage {

  private catalogMenu = $('ul.list-vertical > li:nth-of-type(2)')
  private addButton = $('ul.list-inline.pull-right > li:nth-of-type(3)')
  private generalTab = $('ul.nav.nav-tabs > li:nth-of-type(1)')
  private infoTab = $('ul.nav.nav-tabs > li:nth-of-type(2)')
  private pricesTab = $('ul.nav.nav-tabs > li:nth-of-type(3)')
  private searchField = $('main#main input.form-control[type = search]')
  private productName = name => { return element.all(by.cssContainingText('table.data-table td', name)) }

  //general tab locators
  private nameField = $("input.form-control[name='name[en]']")
  private chooseImage = $("input.form-control[name = 'new_images[]']")
  private enabledButton = element(by.xpath("//label[contains(.,'Enabled')]"))
  private saveButton = $("button[name ='save']")

  //information tab locators
  private descriptionField = $("input.form-control[name = 'short_description[en]']")

  //prices tab locators
  //private priceField = $("input.form-control[name = 'purchase_price']")
  private priceBox = $("input.form-control[name='prices[USD]']")

  //after category added
  private successAlert = $('div.alert.alert-success')
  async getSuccess(){
    await browser.wait(EC.visibilityOf(this.successAlert), 10000, 'success alertnpm tes should appear in 10 seconds, but it doesnt')
    return await this.successAlert.getText()
  }
  /**
   * 
   */
  async openCatalog(){
      await browser.wait(EC.visibilityOf(this.catalogMenu), 10000, 'movie header should appear in 10 seconds, but it doesnt')
      await this.catalogMenu.click()
      console.log('catalog clicked')
  }

  /**
   * 
   */
  async addNewProduct(){
    await browser.wait(EC.visibilityOf(this.addButton), 10000, 'add button should appear in 10 seconds, but it doesnt')
    await this.addButton.click()
    console.log('button clicked')
  }

  /**
   * sends absolute path of image from img folder to the input
   */
  async imageUpload(){
    let fileToUpload = '../img/pic.jpg';
    let absolutePath = path.resolve(__dirname, fileToUpload)
    await this.chooseImage.sendKeys(absolutePath)
    
  }
  
  /**
   * 
   */
   enterGeneralInfo(name) {
    this.nameField.sendKeys(name)
  }

  /**
   * searching for the product in the catalog by name
   * @param {string} string
   * @returns {promise}
   */
  async searchFor(string){
      browser.wait(EC.visibilityOf(this.searchField), 10000, 'name field should appear in 10 seconds, but it doesnt')
      return await this.searchField.sendKeys(string, Key.ENTER)
  }

/**
 * 
 */
async inResults(name){
  return this.productName(name).then(found => {
    return found.length > 0
})
}
  /**
   * 
   */
  async enableProduct(){
    await this.enabledButton.click() 
    await this.saveButton.click()
    console.log('save clicked')
  }

  /**
   * 
   */
  fillGeneralTab(prodObj){
    browser.wait(EC.visibilityOf(this.nameField), 10000, 'name field should appear in 10 seconds, but it doesnt')
    return this.enterGeneralInfo(prodObj.name)
  }

  async clickSave(){
      await this.saveButton.click()
  }

  clickInfoTab() {
    this.infoTab.click();
  }

  enterInfoTab(prodObj){
   
  }

  fillInfoTab() {}

  clickPriceTab() {
    this.pricesTab.click();
  }


  enterPriceInfo(price){
    this.pricesTab.sendKeys()
  }

  fillPriceTab(prodObj){
    browser.wait(EC.visibilityOf(this.priceBox), 10000, 'price box  should appear in 10 seconds, but it doesnt')
    return this.enterPriceInfo(prodObj.price)
  }
}
