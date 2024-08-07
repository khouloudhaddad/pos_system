import { CS_HTMLElement } from "../_base/cs-htmlelement.js";

class CsLeftSidebar extends CS_HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `<div>
            <h1>CS CsLeftSidebar</h1>
        </div>
        `;
  }
}

export { CsLeftSidebar };
