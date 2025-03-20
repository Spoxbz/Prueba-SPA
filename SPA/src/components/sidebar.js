export default function Sidebar(userRole = "guest") {
  const sidebar = document.createElement("nav");
  sidebar.classList.add("sidebar");

  const options = {
    admin: [
      { label: "Panel de Control", path: "/dashboard" },
      { label: "Usuarios", path: "/users" },
      { label: "Configuraciones", path: "/settings" },
    ],
    user: [
      { label: "Mi Perfil", path: "/profile" },
      { label: "Mis Turnos", path: "/appointments" },
      { label: "Cerrar Sesión", path: "/logout" },
    ],
    guest: [
      { label: "Inicio", path: "/" },
      { label: "Acerca de", path: "/about" },
      { label: "Login", path: "/login" },
    ],
  };

  sidebar.innerHTML = `
      <ul>
        ${options[userRole]
          .map(
            (item) => `<li><button class="sidebar-btn" onclick="navigateTo('${item.path}')">${item.label}</button></li>`
          )
          .join("")}
      </ul>
    `;

  return sidebar;
}
