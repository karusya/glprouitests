import { browser, $, $$, element, by, Key, ExpectedConditions as EC, protractor} from 'protractor'
import { async } from 'q'
import * as log4js from 'log4js'
import { BasePage } from './base';

/**
 * Class contains common base page logic
 * @extends BasePage
 */

 export class CartPage extends BasePage{

    private deleteButtons = $$('i.fa.fa-trash')
    
    /**
     * delete all products
     */
    async removeAllProducts() {
        this.deleteButtons.count().then(count => {
            while(count > 0) {
                this.deleteButtons.get(0).click()
                count--
            }
        })
    }
 }