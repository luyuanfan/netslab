class FooterComponent extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <div class="footer">
        <div class="footer-content">
            <img id="jhu-logo" src="images/jhu-logo/PNG/university.shield.rgb.blue.png">
            <p>&copy; 2026 JHU NETS Lab. All rights reserved.</p>
        </div>
        </div>
        `;
    }
}

customElements.define('footer-component', FooterComponent);