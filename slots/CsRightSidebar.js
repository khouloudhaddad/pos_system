import { CS_HTMLElement } from "../_base/cs-htmlelement.js";

class CsRightSidebar extends CS_HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `<div>
            <h1>CS CsRightSidebar</h1>
        </div>
        `;
  }
}

export { CsRightSidebar };
