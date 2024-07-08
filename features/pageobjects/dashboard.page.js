import { $ } from '@wdio/globals'
import Page from './page.js';


class DashboardPage extends Page {

    get cartIcon() {
        return $("#shopping_cart_container");
    }

    async validateOnPage() {
        expect(this.cartIcon).toBeDisplayed();
    }
    
    async validateOnPage () {

    }
}

export default new DashboardPage();
