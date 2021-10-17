import { AbstractPage } from './abstractpage'
import { html } from 'lit-html';
//import { T } from '../i18n/translate';
//import { goHome, gotoPage } from "../router";
var gotoPage = window.gotoPage

export class SWNotify extends AbstractPage {

    constructor(domElem) {
        console.log("SWNOTIFY: inside constructor")
        super(domElem)
    }

    enter() {
        console.log("SWNOTIFY: enter page")

        let theHtml = html`
        <div class="mt-10 mx-6 pb-4 rounded-md shadow-lg">
    
            <div class="px-6 py-4">
                <div class="text-xl font-semibold mb-2 text-center">${T("Application updated")}</div>

                <p class="text text-center">${T("There is a new version of the application and it has already been updated.")}</p>
                <p class="text-center">${T("Please click Accept to refresh the page.")}</p>
                
            </div>
            
            <div class="text-center">
                <button @click=${()=>gotoPage("spinner")} class="btn">${T("Accept")}</button>        
            </div>
    
        </div>
    `

        this.render(theHtml)
    }
}

