import { AbstractPage } from "./abstractpage";
import { html } from 'lit-html';

export class Faqs extends AbstractPage {

    constructor(domElem) {
        super(domElem)
    }

    toggleFaqs(hola) {
        let x = document.getElementById(hola)
        x.classList.toggle("show")
    }

    hideFaqs() {
        let x = document.getElementById("faqsitem")
        x.classList.remove("show")
    }

    async enter() {
        let theHtml = html`
        <div class="w3-container" style="padding:10px 0px;">
            <ul class="w3-ul w3-card-4" >
                <li> 
                    <a class="w3-bar focus-visible-only" @click=${()=>this.toggleFaqs("faqsitem")} href="javascript:void(0)">
                        <div class="w3-bar-item" style="padding:8px;">
                            <span  style="vertical-align:middle;  font-weight: bold;"> ${T("$faqs_question_1")}</span>
                        </div>
                    </a>
                    
                </li>
                <span id="faqsitem" class="w3-bar focus-visible-only hide" href="javascript:void(0)">
                        <div class="w3-bar-item" style="padding:8px; vertical-align:middle;">
                            <span> ${T("$faqs_answer_1")}</span>
                        </div>
                    </span>
            </ul>
            <ul class="w3-ul w3-card-4" style="margin-top:5px;" >
                <li> 
                    <a class="w3-bar focus-visible-only" @click=${()=>this.toggleFaqs("faqsitem2")} href="javascript:void(0)">
                        <div class="w3-bar-item" style="padding:8px;">
                            <span  style="vertical-align:middle;  font-weight: bold;"> ${T("$faqs_question_2")}</span>
                        </div>
                    </a>
                    
                </li>
                <span id="faqsitem2" class="w3-bar focus-visible-only hide" href="javascript:void(0)">
                        <div class="w3-bar-item" style="padding:8px; vertical-align:middle;">
                            <span> ${T("$faqs_answer_2")}</span>
                        </div>
                    </span>
            </ul>
            <ul class="w3-ul w3-card-4" style="margin-top:5px;" >
                <li> 
                    <a class="w3-bar focus-visible-only" @click=${()=>this.toggleFaqs("faqsitem3")} href="javascript:void(0)">
                        <div class="w3-bar-item" style="padding:8px;">
                            <span  style="vertical-align:middle;  font-weight: bold;"> ${T("$faqs_question_3")}</span>
                        </div>
                    </a>
                    
                </li>
                <span id="faqsitem3" class="w3-bar focus-visible-only hide" href="javascript:void(0)">
                        <div class="w3-bar-item" style="padding:8px; vertical-align:middle;">
                            <span> ${T("$faqs_answer_3")}</span>
                        </div>
                    </span>
            </ul>
            <ul class="w3-ul w3-card-4" style="margin-top:5px;" >
                <li> 
                    <a class="w3-bar focus-visible-only" @click=${()=>this.toggleFaqs("faqsitem4")} href="javascript:void(0)">
                        <div class="w3-bar-item" style="padding:8px;">
                            <span  style="vertical-align:middle; font-weight: bold;"> ${T("$faqs_question_4")}</span>
                        </div>
                    </a>
                    
                </li>
                <span id="faqsitem4" class="w3-bar focus-visible-only hide" href="javascript:void(0)">
                        <div class="w3-bar-item" style="padding:8px; vertical-align:middle;">
                            <span> ${T("$faqs_answer_4")}</span>
                            <br>
                            <span style="vertical-align:middle; font-weight: bold;">Android: </span>
                            <a style="vertical-align:middle;" href="https://support.google.com/chrome/answer/114662?hl=es-419&co=GENIE.Platform%3DAndroid" target="_blank">https://support.google.com/chrome/answer/114662?hl=es-419&co=GENIE.Platform%3DAndroid</a>
                            <br>
                            <span style="vertical-align:middle; font-weight: bold;">IOS: </span>
                            <a style="vertical-align:middle;" href="https://support.google.com/chrome/answer/114662?hl=es-&ref_topic=7439724&co=GENIE.Platform%3DiOS" target="_blank">https://support.google.com/chrome/answer/114662?hl=es-&ref_topic=7439724&co=GENIE.Platform%3DiOS</a>
                        </div>
                    </span>
            </ul>
            <ul class="w3-ul w3-card-4" style="margin-top:5px;" >
                <li> 
                    <a class="w3-bar focus-visible-only" @click=${()=>this.toggleFaqs("faqsitem5")} href="javascript:void(0)">
                        <div class="w3-bar-item" style="padding:8px;">
                            <span  style="vertical-align:middle;  font-weight: bold;"> ${T("$faqs_question_5")}</span>
                        </div>
                    </a>
                    
                </li>
                <span id="faqsitem5" class="w3-bar focus-visible-only hide" href="javascript:void(0)">
                        <div class="w3-bar-item" style="padding:8px; vertical-align:middle;">
                            <span> ${T("$faqs_answer_5")}</span>
                            <a href=" https://canalsalut.gencat.cat/lamevasalut" target="_blank"> https://canalsalut.gencat.cat/lamevasalut</a>
                            <span> ${T("$faqs_answer_5_2")}</span>
                        </div>
                    </span>
            </ul>
            <ul class="w3-ul w3-card-4" style="margin-top:5px;" >
                <li> 
                    <a class="w3-bar focus-visible-only" @click=${()=>this.toggleFaqs("faqsitem6")} href="javascript:void(0)">
                        <div class="w3-bar-item" style="padding:8px;">
                            <span  style="vertical-align:middle;  font-weight: bold;"> ${T("$faqs_question_6")}</span>
                        </div>
                    </a>
                    
                </li>
                <span id="faqsitem6" class="w3-bar focus-visible-only hide" href="javascript:void(0)">
                        <div class="w3-bar-item" style="padding:8px; vertical-align:middle;">
                            <span> ${T("$faqs_answer_6")}</span>
                        </div>
                    </span>
            </ul>
            <ul class="w3-ul w3-card-4" style="margin-top:5px;" >
                <li> 
                    <a class="w3-bar focus-visible-only" @click=${()=>this.toggleFaqs("faqsitem7")} href="javascript:void(0)">
                        <div class="w3-bar-item" style="padding:8px;">
                            <span  style="vertical-align:middle;  font-weight: bold;"> ${T("$faqs_question_7")}</span>
                        </div>
                    </a>
                    
                </li>
                <span id="faqsitem7" class="w3-bar focus-visible-only hide" href="javascript:void(0)">
                        <div class="w3-bar-item" style="padding:8px; vertical-align:middle;">
                            <span> ${T("$faqs_answer_7")}</span>
                            <br>
                            <span> ${T("$faqs_answer_7_2")}</span>
                        </div>
                    </span>
            </ul>
            <ul class="w3-ul w3-card-4" style="margin-top:5px;" >
                <li> 
                    <a class="w3-bar focus-visible-only" @click=${()=>this.toggleFaqs("faqsitem8")} href="javascript:void(0)">
                        <div class="w3-bar-item" style="padding:8px;">
                            <span  style="vertical-align:middle;  font-weight: bold;"> ${T("$faqs_question_8")}</span>
                        </div>
                    </a>
                    
                </li>
                <span id="faqsitem8" class="w3-bar focus-visible-only hide" href="javascript:void(0)">
                        <div class="w3-bar-item" style="padding:8px; vertical-align:middle;">
                            <span> ${T("$faqs_answer_8")}</span>
                        </div>
                    </span>
            </ul>
        </div>
        `
        this.render(theHtml)
    }

    
}

function toggleFaqs() {
    let x = document.getElementById("faqsitem")
    x.classList.toggle("show")
}
