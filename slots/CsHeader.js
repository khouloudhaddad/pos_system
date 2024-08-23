import { CS_HTMLElement } from "../_base/cs-htmlelement.js";

class CsHeader extends CS_HTMLElement {
    constructor(){
        super();
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = 
        `<slot name="searchBar"><smft-search-bar></smft-search-bar></slot>
        <slot name="userAccount"><smft-user-account></smft-user-account></slot>

        <style>
            :host {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0.75rem 1.5rem;
                border-bottom: 1px solid #dee2e6;
                background: #fff;
            }
        </style>
        `;
    }
}

export { CsHeader };