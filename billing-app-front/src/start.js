import ROUTES from "./routes/variable_routes.js";
import "./assets/styles/start.css";

export default function () {
  return `
    <div class="start-container">
      <header class="start-header">
      <h1>Billing App - Test</h1>
      <nav>
        <button x-on:click="navigateTo('${ROUTES.HOME.BASE}')" class="btn">Inicio</button>
        <button x-on:click="navigateTo('${ROUTES.ABOUT}')" class="btn">Acerca de</button>
        <button x-on:click="navigateTo('${ROUTES.CONTACT}')" class="btn">Contacto</button>
        <button x-on:click="navigateTo('${ROUTES.LOGIN.BASE}')" class="btn">Login</button>
      </nav>
    </header>
    <main id="content">
      <h2>Cargando...</h2>
    </main>
    </div>
  `;
}
