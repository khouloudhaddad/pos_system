import { CS_HTMLElement } from "../_base/cs-htmlelement.js";

class CsContent extends CS_HTMLElement{
    constructor(){
        super();
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = 
        `<h1>CS Content</h1>
        

        <style>
            :host{
                padding: 1rem 1.25rem;
                display: flex;
            }
        </style>
        `;
    }
}

export { CsContent };