class LogoComponent extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <div class="logo-area">
            <div class="logo-large-text">Johns Hopkins NETS Lab</div>
            <div class="logo-small-text">Network Security and Internet Measurement</div>
        </div>
        `;
    }
}

customElements.define('logo-component', LogoComponent);