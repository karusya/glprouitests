import { browser, $, $$, element, by, Key, ExpectedConditions as EC} from 'protractor'
import { async } from 'q'
import { BasePage } from './base'
//browser.ignoreSynchronization = true

/**
 * Class creates a new home page
 * @extends BasePage
 */

export class LoginPage extends BasePage{

    
    private loginForm = $("input[name='username']")
    private passwordForm = $("input[name='password']")
    private loginButton = $("button[name='login']")
    public url = 'admin/login.php'
     
     /**
     * convenience wrapper for login that allows you to login via
     * role object. eg. loginAs(admin)
     * @param  {[type]} userObj [description]
     * @return {[type]}         [description]
     */
    async loginAs(userObj){
        return await this.enterLogin(userObj.login, userObj.password)
    }

    /**
     * non-angular login method
     * @param login 
     * @param pass 
     * @return {promise}
     */
    enterLogin(login, pass){
        this.loginForm.sendKeys(login)
        this.passwordForm.sendKeys(pass)
        return this.loginButton.click()
    }

    
}