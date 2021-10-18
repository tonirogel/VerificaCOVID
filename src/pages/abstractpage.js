import { html, render } from 'lit-html';
import { HeaderBar } from '../components/header'

// Abstract page with common behaviour
// Actual pages should inherit from this class

export class AbstractPage {

    constructor(id) {
        // Create a DOM element, by default a "div" unless the page specifies another tag
        if (this.tagName === undefined) {
            this.tagName = "div"
        }
        // Create and save the DOM element for rendering later
        this.domElem = document.createElement(this.tagName)
        // Assign an "id" if the page specified one
        if (id) { this.domElem.id = id }
        // Start hidden
        this.domElem.style.display = "none"
    }

    render(theHtml) {
        // Display the page
        this.domElem.style.display = "block"
        // Repaint the header, hiding any displayed sub-menu
        HeaderBar()
        // Render to the DOM using the lit-html mechanism
        render(theHtml, this.domElem)
    }
}
