class CustomCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
          <div class="card">
              <h3></h3>
              <p></p>
              <a>inicio</a>
          </div>
      `;
  }

  connectedCallback() {
    this.shadowRoot.querySelector("h3").textContent = this.getAttribute("title");
    this.shadowRoot.querySelector("p").textContent = this.getAttribute("content");
    // this.shadowRoot.querySelector("a").textContent = this.getAttribute("link");
  }
}
customElements.define("custom-card", CustomCard);
