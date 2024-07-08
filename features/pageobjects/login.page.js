import { $ } from '@wdio/globals'
import Page from './page.js';


class LoginPage extends Page {
    
    get usernameTextbox () {
        return $('#user-name');
    }

    get passwordTextBox () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-button');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async inputUsername(username) {
        await this.usernameTextbox.setValue(username);
    }

   
    open () {
        return super.open('');
    }
}

export default new LoginPage();
