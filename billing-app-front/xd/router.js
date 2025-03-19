import ROUTES from "./variable_routes.js";
// Paginas
// import LoginPage from "../pages/login.js";
// import SignupPage from "../pages/signup.js";

const routes = {
  [ROUTES.HOME.BASE]: "/src/pages/home.html",
  // [ROUTES.LOGIN.BASE]: LoginPage(),
  [ROUTES.LOGIN.BASE]: "/src/pages/loginPage.html",
  // ! Si quiero manejar rutas con paginas que son .js e incluyen componentes .js
  // [ROUTES.SIGNUP.BASE3]: SignupPage(),
  [ROUTES.SIGNUP.BASE3]: "/src/pages/signupPage.html",
  [ROUTES.ABOUT]: "/src/pages/about.html",
  [ROUTES.CONTACT]: "/src/pages/contact.html",
  [ROUTES.NOT_FOUND]: "/src/pages/not-found.html",
};

// Función para cargar la página dentro de #content
async function loadRoute() {
  const path = window.location.pathname;
  const page = routes[path] || routes[ROUTES.LOGIN.BASE];

  try {
    if (typeof page === "string") {
      const response = await fetch(page); // Aqui se encuentra un error que no se que es
      const html = await response.text();
      document.querySelector("#content").innerHTML = html;
    } else if (typeof page === "function") {
      // Div temporal para evitar que el naveador lo interprete mal
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = page();
      document.querySelector("#content").replaceChildren(tempDiv);
    }

    // Forzar activacion de htmx si es que se necesita
    if ([ROUTES.CONTACT, ROUTES.SIGNUP.BASE3].includes(path)) {
      console.log(`Página ${path} cargada, activando HTMX ...`);
      htmx.process(document.querySelector("#content"));
    }
  } catch (error) {
    console.error("Error cargando la pagina (consola): ", error);
    document.querySelector("#content").innerHTML = "<h2>Error al cargar la pagina :'D</h2>";
  }

  // try {
  //   const response = await fetch(page);
  //   const html = await response.text();
  //   document.querySelector("#content").innerHTML = html;

  //   // Esperar a que HTMX se active después de cargar la página
  //   if (path === ROUTES.CONTACT) {
  //     console.log("Página de contacto cargada, activando HTMX...");
  //     htmx.process(document.querySelector("#content"));
  //   } else if (path === ROUTES.SIGNUP.BASE3) {
  //     console.log("Página de contacto cargada, activando HTMX...");
  //     htmx.process(document.querySelector("#content"));
  //   }
  // } catch (error) {
  //   console.error("Error cargando la página:", error);
  //   document.querySelector("#content").innerHTML =
  //     routes[window.location.pathname] || "<h2>Error al cargar la página</h2>";
  // }
}

// Función para navegar sin recargar la página
function navigateTo(url) {
  history.pushState(null, null, url);
  loadRoute();
}

// Registrar navigateTo en window para que Alpine.js pueda acceder
window.navigateTo = navigateTo;

// Detectar cambios en la URL (para botón "atrás" y "adelante")
window.addEventListener("popstate", loadRoute);

export { navigateTo, loadRoute };
