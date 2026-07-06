class HeaderComponent extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar">
          <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="projects.html">Projects</a></li>
          <li><a href="people.html">People</a></li>
          <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
        `;
    }
}

customElements.define('navbar-component', HeaderComponent);