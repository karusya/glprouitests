import { browser, $, $$, element, by, Key, ExpectedConditions as EC} from 'protractor'
import { async } from 'q'
import { BasePage } from './base'

/**
 * Class contains admin base page logic
 * @extends BasePage
 */

export class AdminPage extends BasePage{

   public menuLoaded =  $$('div#box-apps-menu-wrapper >ul>li').first()
   public loginMessage = $('div.alert.alert-success')
   public url = 'http://localhost/litecart/admin/'

   async loaded(){
       await browser.wait(EC.visibilityOf(this.menuLoaded),  10000, 'admin page should open in 10 seconds, but it doesnt')
   }

   async getSuccess(){
    await browser.wait(EC.visibilityOf(this.loginMessage), 10000, 'success message  should appear in 10 seconds, but it doesnt');
    return await this.loginMessage.getText()
   }

}