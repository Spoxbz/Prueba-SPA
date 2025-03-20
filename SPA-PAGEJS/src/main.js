import page from "page";
import { loadPage } from "./router/routes.js";

// Elementos donde se inyectará el contenido
const app = document.querySelector("#app");
const navbar = document.querySelector("#navbar");

// Cargar Navbar de forma estática
fetch("./src/components/navbar.html")
  .then((response) => response.text())
  .then((html) => (navbar.innerHTML = html));

// Definir rutas
page("/", () => loadPage("./src/pages/home.html"));
page("/about", () => loadPage("./src/pages/about.html"));
page("/contact", () => loadPage("./src/pages/contact.html"));

page.start();
