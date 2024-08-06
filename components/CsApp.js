import { CS_HTMLElement } from "../_base/cs-htmlelement.js";

class CsApp extends CS_HTMLElement{
    constructor(){
        super();
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = 
        `<div>
            <slot name="header"></slot>
            <slot name="leftSidebar"></slot>
        </div>
        `;
    }
}

export { CsApp };