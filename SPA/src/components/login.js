import { navigateTo } from "../router.js";

export default function Login() {
  const container = document.createElement("div");
  container.innerHTML = `
    <h1>Iniciar Sesión</h1>
    <login-form></login-form>
    <button id="backToHome">Volver</button>
  `;

  container.querySelector("#backToHome").addEventListener("click", () => {
    navigateTo("/");
  });

  return container;
}
