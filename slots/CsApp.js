import { CS_HTMLElement } from "../_base/cs-htmlelement.js";

class CsApp extends CS_HTMLElement{
    constructor(){
        super();
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = 
        `<div class="main_wrapper">
            <slot name="main_header"></slot>
            <slot name="leftSidebar"></slot>
            <slot name="content"></slot>
            <slot name="rightSidebar"></slot>
        </div>
        `;
    }
}

export { CsApp };