import { AbstractPage } from '../pages/abstractpage'
import { html } from 'lit-html';

export class SelectCamera extends AbstractPage {

    constructor(domElem) {
        super(domElem)
    }

    async enter() {
        console.log("Select camera")

        var preferredLabel = "Undefined"
        let preferredCamera = await getPreferredVideoDevice()
        if (preferredCamera) {
            preferredLabel = preferredCamera.label
        }

        if (window.videoDevices.length == 0) {
            this.render(html`<p>No camera available</p>`)
            return;
        }

        let theHtml = html`
        <p>Default camera: ${preferredLabel}</p>
        <p>All cameras:</p>
        <ul>
          ${window.videoDevices.map((camera) =>
            html`<li>${camera.label}</li>`
          )}
        </ul>
      `;

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

