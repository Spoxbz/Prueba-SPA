class LoginForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <form id="login-form">
            <label for="username">Usuario:</label>
            <input type="text" id="username" name="username" required autocomplete="name" />

            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" required autocomplete="current-password" />

            <button class="btn" type="submit">Iniciar Sesión</button>
        </form>
    `;
  }

  connectedCallback() {
    // this.shadowRoot.querySelector("h3").textContent = this.getAttribute("title");
  }
}
customElements.define("login-form", LoginForm);
