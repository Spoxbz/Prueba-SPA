export default function Sidebar() {
  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");

  sidebar.innerHTML = `
      <button id="toggleSidebar" class="sidebar-toggle">
        <span class="material-symbols-outlined">menu</span>
      </button>
      <ul class="sidebar-menu">
        <li>
          <span class="material-symbols-outlined">home</span>
          <span class="sidebar-text">Inicio</span>
        </li>
        <li>
          <span class="material-symbols-outlined">home</span>
          <span class="sidebar-text">Acerca de</span>
        </li>
        <li>
          <span class="material-symbols-outlined">home</span>
          <span class="sidebar-text">Contacto</span>
        </li>
        <li>
          <span class="material-symbols-outlined">home</span>
          <span class="sidebar-text">Login</span>
        </li>
      </ul>
    `;

  sidebar.querySelector("#toggleSidebar").addEventListener("click", () => {
    sidebar.classList.toggle("expanded");
  });

  return sidebar;
}
