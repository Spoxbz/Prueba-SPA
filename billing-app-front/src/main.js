import "./style.css";
import start from "./start.js";
import { loadRoute } from "./routes/router.js";
// Importar el archivo de estilos
import "./assets/styles/contact.css";
import "./assets/styles/signup.css";

// Renderizar la estructura principal
document.querySelector("#app").innerHTML = start();

// Cargar la ruta inicial
loadRoute();
