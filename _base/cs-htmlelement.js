

class CS_HTMLElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode : "open"});
        this.internals = this.attachInternals();
    }

   static  i = `doc goes here.`;

    connectedCallback() {
        this.shadowRoot.innerHTML = this.render();
    }

    render(){
        return '';
    }

    shadow(selector){
        return this.shadowRoot.querySelector(selector);
    }

    shadowAll(selector){
        return this.shadowRoot.querySelectorAll(selector);
    }

    p(prop_name){
        return this.getAttribute(prop_name);
    }
}

export { CS_HTMLElement };