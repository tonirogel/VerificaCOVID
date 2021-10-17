import { AbstractPage } from './abstractpage'
import { html } from 'lit-html';
//import { T } from '../i18n/translate';
//import { goHome, gotoPage } from "../router";
var gotoPage = window.gotoPage

export class RefreshKeys extends AbstractPage {

    constructor(domElem) {
        super(domElem)
    }

    enter() {
        console.log("RefreshKeys: enter page")

        window.refreshTrustedKeys()

        let theHtml = html`
            <div class="mt-10 mx-6 pb-4 rounded-md shadow-lg">
        
                <div class="px-6 py-4">
                    <h1 class="text-xl text-center">${T("Verification keys updated")}</h1>
                </div>
                
                <div class="text-center">
                    <button @click=${()=>this.acceptedButton()} class="btn">${T("Accept")}</button>        
                </div>
        
            </div>
        `

        this.render(theHtml)
    }

    async acceptedButton() {
        window.initialHeader();
        window.history.back();
    }
}

