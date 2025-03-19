import LoginForm from "../components/LOGIN/loginForm.js";
import ROUTES from "../routes/variable_routes.js";

export default function LoginPage() {
  return `
    <header>
      <h1>Bienvenido, por favor inicie sesión</h1>
    </header>
    <main>
      ${LoginForm()}  <!-- Cargar el formulario -->
      <!-- Botón para volver a la página de inicio -->
      <button class="btn" x-on:click="navigateTo('${ROUTES.HOME.BASE}')" class="btn">Volver</button>
      <!-- Botón para ir a la página de registro -->
      <button class="btn" x-on:click="navigateTo('${ROUTES.SIGNUP.BASE3}')" class="btn">Registrarse</button>
    </main>
  `;
}
