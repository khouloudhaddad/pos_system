import { CS_HTMLElement } from "../_base/cs-htmlelement.js";

class CsContent extends CS_HTMLElement{
    constructor(){
        super();
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = 
        `<div>
            <h1>CS Content</h1>
        </div>
        `;
    }
}

export { CsContent };