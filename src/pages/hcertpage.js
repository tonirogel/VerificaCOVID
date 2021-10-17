import { html, render } from 'lit-html';
import { log } from '../log'
import { CWT } from "../components/cwt"
import { AbstractPage } from './abstractpage'
import { verifyHcert } from '../components/verifications'
//import { T } from '../i18n/translate';
//import { gotoPage } from '../router';
import ok_image from "../img/ok.png"
import error_image from "../img/error.png"
import warning_image from "../img/warning.png"

var gotoPage = window.gotoPage

export class DisplayHcert extends AbstractPage {

    constructor(id) {
        console.log("HCERT: Constructor")
        super(id)
    }

    async enter(qrContent, historyData) {
        console.log("PRESENT Enter", qrContent)
//        if (historyData) { gotoPage("verifier"); return;}
        // let qrContent = pageData.text
        let hcert = undefined
        let verified = false

        // Decode credential verifying it at the same time
        try {
            hcert = await CWT.decodeHC1QR(qrContent, true);
            verified = hcert[3]
        } catch (error) {
            log.myerror("Error verifying credential", error)
            this.render(this.renderGeneralError(error))
            return;
        }

        // Build the verification structure
        let verification = {
            result: "OK",
            message: T("The certificate is valid.")
        }

        if (verified === false) {
            verification.result = "ERROR"
            verification.message = T("Signature validation failed. The certificate is not valid.")
        } else if (verified === "PRE") {
            verification.result = "WARNING"
            verification.message = T("$warningmsg")
        }

        // If basic verification was OK, apply additional verifications
        console.log(verification)
        if ((verified === true) || (verified === "PRE")) {
            console.log("Additional verifications")
            verified = verifyHcert(hcert)
            console.log(verified)
            if (verified != true) {
                verification.result = "ERROR",
                verification.message = T(verified)
            }
        }

        console.log(verification)

        let thehtml = ""
        try {
            // Render the credential
            thehtml = this.renderDetail(hcert, verification);
        } catch (error) {
            log.myerror("Error rendering credential", error)
            this.render(this.renderGeneralError(error))
            return;
        }

        let fullPage = html`
        ${thehtml}
        <div class="text-center">
            <button @click=${()=> gotoPage("verifier")} class="btn">
            ${T("Verify another")}</button>
        </div>
        `
        this.render(fullPage)

    }

    renderGeneralError(error) {
        return html`
            <div id="hcertFailed" class="w3-panel bkg-fail">
                <h3>Failed!</h3>
                <p>The credential has an invalid format.</p>
            </div>
            `
    }

    renderDetail(cred, verification) {
        // The credential
        let payload = cred[1];

        let title = "Validated"
        let image = ok_image
        let color = "background-color: #04FF00"

        if (verification.result === "WARNING") {
            title = "Warning"
            image = warning_image
            color = "background-color: yellow"
        } else if (verification.result === "ERROR") {
            title = "Not Validated"
            image = error_image
            color = "background-color: orangered"
        }

        let thehtml = html`

            <div id="hcertWarning" class="px-6" style="${color}">
                <div class="flex items-center">
                    <div class="mx-auto">
                        <img class="inline-block" src=${image}  alt="">
                        <span class="text-lg font-semibold pl-4">${T(title)}</span>
                    </div>
                </div>
                <div class="text-center">${verification.message}</div>
            </div>

            <div class="text-center my-6">
                <div class="mb-3">
                    <div>${T("Surname and forename")}</div>
                    <div class="text-lg font-semibold">${payload.fullName}</div>
                </div>
                <div>
                    <div>${T("Date of birth")}</div>
                    <div class="text-lg font-semibold">${payload.dateOfBirth}</div>
                </div>
            </div>
           
        `;
    
        return thehtml;
    }

}


