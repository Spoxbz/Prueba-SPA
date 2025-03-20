import Layout from "./layout.js";

export default function Dashboard() {
  const content = document.createElement("div");
  content.innerHTML = `
    <h1>Dashboard</h1>
    <p>Bienvenido al panel de control.</p>
  `;

  return Layout(content, "admin"); // Simulando que el usuario es un admin
}
