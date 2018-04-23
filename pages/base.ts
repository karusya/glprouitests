import { browser, $, $$, element, by, Key, ExpectedConditions as EC, protractor} from 'protractor'
import { async } from 'q'
import * as log4js from 'log4js'

/**
 * Class contains common base page logic
 */

export class BasePage {
    public logger = log4js.getLogger('SpecLogger');
    
     /**
     * Wrappers for expected conditions
     * @returns {ExpectedCondition}
     */
    

     goto(url){
        return browser.driver.get(url)
     }

     inDom(locator){
         return EC.presenceOf(locator)
     }

     isVisible(locator){
         return EC.visibilityOf(locator)
     }
     
    
}