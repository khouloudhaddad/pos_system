import { CS_HTMLElement } from "../_base/cs-htmlelement.js";

class CsHeader extends CS_HTMLElement {
    constructor(){
        super();
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = 
        `<div>
            <h1>CS Header</h1>
        </div>
        `;
    }
}

export { CsHeader };