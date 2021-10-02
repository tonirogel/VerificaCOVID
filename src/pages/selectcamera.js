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
        <div class="container padding-16">

            <ul class="w3-ul w3-card-4">
            ${window.videoDevices.map((camera) =>

                html`
                <li class="bar" @click=${()=>this.setCamera(camera.deviceId)}>
                    <div class="bar-item" style="padding:8px;">
                        <div class="h5" style="vertical-align:middle;">${camera.label}</div>
                    </div>
                </li>`
            
                )}
            </ul>
        </div>
        `
        this.render(theHtml)
    }

    async setCamera(l) {
        console.log("Selecting camera", l)
        window.selectedCamera = l
        localStorage.setItem("selectedCamera", l)
        window.history.back()
        window.initialHeader();
    }
}

