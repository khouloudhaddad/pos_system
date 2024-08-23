import { CS_HTMLElement } from "../_base/cs-htmlelement.js";

class CsLeftSidebar extends CS_HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `<div>
          <a href="#" title="Smoft ERP | POS"><img src="../public/img/logo-light.png" alt="Smoft" /></a>
          <slot name="navigation"><smft-nav></smft-nav></slot>
        </div>

        <style>
          :host{
              width: 5em;
              display: inline-flex;
              padding: 1.25rem 1rem;
              background: #fff;
              border-right: 1px solid #dee2e6;
              height: 100%;
          }
          img {
            max-width:100%;
            width: 95%;
          }
        </style>
        `;
  }
}

export { CsLeftSidebar };
