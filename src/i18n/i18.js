import { AbstractPage } from '../pages/abstractpage'
import { html } from 'lit-html';

import ukflag from './flags/uk.png'
import esflag from './flags/es.png'
import caflag from './flags/ca.png'
import frflag from './flags/fr.png'
import deflag from './flags/de.png'
import itflag from './flags/it.png'

export class SelectLanguage extends AbstractPage {

    constructor(domElem) {
        super(domElem)
    }

    enter() {
        console.log("Select language")

        let theHtml = html`
<div class="px-6 pt-6">

    <div class="flex rounded-md shadow-lg pl-2 py-4 mb-1 border-2" @click=${()=>this.selectLang("en")}>
        <img src=${ukflag}>
        <span class="text-lg font-semibold pl-4">English</span>
    </div>

    <div class="flex rounded-md shadow-lg pl-2 py-4 mb-1 border-2" @click=${()=>this.selectLang("ca")}>
        <img src=${caflag}>
        <span class="text-lg font-semibold pl-4">Català</span>
    </div>

    <div class="flex rounded-md shadow-lg pl-2 py-4 mb-1 border-2" @click=${()=>this.selectLang("es")}>
        <img src=${esflag}>
        <span class="text-lg font-semibold pl-4">Español</span>
    </div>

    <div class="flex rounded-md shadow-lg pl-2 py-4 mb-1 border-2" @click=${()=>this.selectLang("fr")}>
        <img src=${frflag}>
        <span class="text-lg font-semibold pl-4">Français</span>
    </div>

    <div class="flex rounded-md shadow-lg pl-2 py-4 mb-1 border-2" @click=${()=>this.selectLang("de")}>
        <img src=${deflag}>
        <span class="text-lg font-semibold pl-4">Deutsch</span>
    </div>

    <div class="flex rounded-md shadow-lg pl-2 py-4 mb-1 border-2" @click=${()=>this.selectLang("it")}>
        <img src=${itflag}>
        <span class="text-lg font-semibold pl-4">Italiano</span>
    </div>
    
</div>
`
        this.render(theHtml)
    }

    async selectLang(l) {
        console.log("Selecting language", l)
        window.preferredLanguage = l
        localStorage.setItem("preferredLanguage", l)
        window.history.back()
        window.initialHeader();
    }
}

