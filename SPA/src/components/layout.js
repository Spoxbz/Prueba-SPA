import { navigateTo } from "../router";
import Sidebar from "./sidebar";

export default function Layout(content) {
  const container = document.createElement("div");
  container.classList.add("layout");

  const sidebar = Sidebar();

  container.innerHTML = `
    <div class="start-container">
      <header class="start-header">
        <h1 class="start-title">Test</h1>
        <nav class="start-nav">
          <button class="btn" id="homeBtn">Inicio</button>
          <button class="btn" id="aboutBtn">Acerca de</button>
          <button class="btn" id="contactBtn">Contacto</button>
          <button class="btn" id="loginBtn">Login</button>
        </nav>
      </header>
      <main id="content"></main>
    </div>
  `;

  // Agregar eventos de navegación a los botones
  container.querySelector("#homeBtn").addEventListener("click", () => navigateTo("/"));
  container.querySelector("#aboutBtn").addEventListener("click", () => navigateTo("/about"));
  container.querySelector("#contactBtn").addEventListener("click", () => navigateTo("/contact"));
  container.querySelector("#loginBtn").addEventListener("click", () => navigateTo("/login"));

  // Agregar el sidebar
  container.insertBefore(sidebar, container.firstChild);

  if (content instanceof Node) {
    container.querySelector("#content").appendChild(content);
  } else {
    console.error("El contenido proporcionado a Layout no es un nodo válido.");
  }

  return container;
}
