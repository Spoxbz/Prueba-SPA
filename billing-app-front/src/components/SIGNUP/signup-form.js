class SignupForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <form id="signup-form"
          hx-post="http://localhost:3000/register-response" 
          hx-target="#response" 
          hx-swap="innerHTML">
      
            <label for="username">Usuario:</label>
            <input type="text" id="username" name="username" required autocapitalize="true" autocomplete="name"/>
      
            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required autocomplete="email" />
      
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" required />
      
            <button class="btn" type="submit">Registrarse</button>
        </form>
        <div id="response"></div>
    `;
  }

  connectedCallback() {
    // this.shadowRoot.querySelector("h3").textContent = this.getAttribute("title");
  }
}
customElements.define("signup-form", SignupForm);
