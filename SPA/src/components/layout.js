import Sidebar from "./sidebar";

export default function Layout(content) {
  const container = document.createElement("div");
  container.innerHTML = `
    <div class="start-container">
      <header class="start-header">
        <h1>Billing App - Test</h1>
        <nav>
          <button onclick="navigateTo('/')" class="btn">Inicio</button>
          <button onclick="navigateTo('/about')" class="btn">Acerca de</button>
          <button onclick="navigateTo('/contact')" class="btn">Contacto</button>
          <button onclick="navigateTo('/login')" class="btn">Login</button>
        </nav>
      </header>
      <aside id="sidebar"></aside>
      <main id="content"></main>
    </div>
  `;

  container.querySelector("#sidebar").appendChild(Sidebar(userRole));
  container.querySelector("#content").appendChild(content);
  return container;
}
