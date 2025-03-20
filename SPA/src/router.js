import ROUTES from "./routes/variable_routes.js";
import Home from "./components/home.js";
import Login from "./components/login.js";
import Dashboard from "./components/dashboard.js";

const routes = {
  [ROUTES.HOME.BASE]: Home,
  [ROUTES.LOGIN.BASE]: Login,
  [ROUTES.DASHBOARD.BASE]: Dashboard,
};

// Función para navegar entre rutas
export function navigateTo(url) {
  if (routes[url]) {
    history.pushState({}, "", url);
    updateView();
  } else {
    console.warn(`Ruta no encontrada: ${url}`);
    history.pushState({}, "", ROUTES.HOME.BASE);
    updateView();
  }
}

// Función para renderizar la vista correctamente
function updateView() {
  const app = document.querySelector("#app");
  app.innerHTML = ""; // Limpia el contenido anterior

  const routeComponent = routes[window.location.pathname] || Home;

  // Verifica que el componente sea un nodo válido antes de agregarlo
  if (typeof routeComponent === "function") {
    app.appendChild(routeComponent());
  } else {
    console.error("El componente no es válido para la ruta:", window.location.pathname);
  }
}

// Escuchar cambios en el historial del navegador (botón atrás/adelante)
window.addEventListener("popstate", updateView);

// Renderizar la vista inicial al cargar la página
document.addEventListener("DOMContentLoaded", updateView);

export default updateView;
