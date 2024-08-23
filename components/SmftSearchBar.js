import { CS_HTMLElement } from "../_base/cs-htmlelement.js";

class SmftSearchBar extends CS_HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `<form id="searchForm"> 
                <input type="search" id="query" name="query" placeholder="Search menu">
                <button type="submit">
                   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                </button>
            </form>    
            <style>
                :host {
                    flex: 1 0 50%;
                }
                form{
                    display: flex;
                    align-items: center;
                    justify-content: start;
                    position: relative;
                }
                input{
                    border: 1px solid #dee2e6;
                    background: #f8f9fa;
                    border-radius: 0.25rem;
                    padding: 0.75rem 1rem;
                    width: 100%;
                }
                button{
                    background: transparent;
                    position: absolute;
                    right: 0.25rem;
                    border: none;
                    outline: none;
                }
                svg{
                    fill: #6c757d;
                }
            </style>
            `;
  }
}

export { SmftSearchBar };
