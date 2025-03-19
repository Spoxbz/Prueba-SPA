import "https://unpkg.com/htmx.org@1.9.5";

export default function SignUpForm() {
  return `
    <form id="signup-form"
          hx-post="http://localhost:3000/register" 
          hx-target="#response" 
          hx-swap="innerHTML">
      
      <label for="username">Usuario:</label>
      <input type="text" id="username" name="username" required />
      
      <label for="email">Correo Electrónico:</label>
      <input type="email" id="email" name="email" required />
      
      <label for="password">Contraseña:</label>
      <input type="password" id="password" name="password" required />
      
      <button class="btn" type="submit">Registrarse</button>
    </form>

    <div id="response"></div>
  `;
}
