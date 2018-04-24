import { browser, $, $$, element, by, Key, ExpectedConditions as EC, protractor} from 'protractor'
import { async } from 'q'
import * as log4js from 'log4js'
import { BasePage } from './base';

export class MainPage extends BasePage{

private latestTab = element(by.linkText('Latest Products'))
private addedProduct = $$('div#box-latest-products div.col-xs-6.col-sm-4.col-md-3').last()
private addButton = $('button[name="add_cart_product"]')
private viewFullLink = $('div#view-full-page')
private crossIcon = $('div.featherlight-close-icon')
private cartCount = element(by.xpath("//span[@class='quantity']"))
private homeButton = element(by.className("general-0"))
private cartButton = element(by.xpath("//a[text() = 'Checkout »']"))

async openLatest(){
    await browser.wait(EC.visibilityOf(this.latestTab), 10000, 'latest tab should be opened  in 10 seconds, but it doesnt')
    return await this.latestTab.click()
     
}

async openProduct(){
    await browser.wait(EC.visibilityOf(this.addedProduct), 10000, 'latest added product should be present  in 10 seconds, but it is not')
    return await this.addedProduct.click()
    
}

getAllProducts(){
    
}
async selectProductByName(){

}
async clickHome(){
    await this.homeButton.click()
}

async addToCart(numberElement){
    await this.viewFullLink.click()
    await browser.wait(EC.visibilityOf(this.addButton), 10000, 'add button should be present  in 10 seconds, but it is not')
    await this.addButton.click()
    await browser.wait(EC.textToBePresentInElement(this.cartCount,  "" + numberElement + ""))
    //await this.clickHome()
    
}

async countCart(){
    await browser.wait(EC.visibilityOf(this.cartCount), 10000, 'latest added product should be present  in 10 seconds, but it is not')
    return await this.cartCount.getText()
}

async openCart(){

}





}