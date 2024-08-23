import { CS_HTMLElement } from "../_base/cs-htmlelement.js";

class CsRightSidebar extends CS_HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
            <h3>Detail Items</h3>
            <slot name="itemsList"></slot>

            <div class="total">
              <h3>Total</h3>
              <p class="price">$116.95</p>
            </div>
        
        <style>
        :host{
          width: 25em;
          display: inline-flex;
          padding: 1.25rem 1rem;
          background: #fff;
          border-left: 1px solid #dee2e6;
          height: 100%;
          flex-direction: column;
        }
        .total{
          display:flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        .price {
          font-weight: 700;
        }
          h3{
            margin: 0;
          }
        </style>
        `;
  }
}

export { CsRightSidebar };
