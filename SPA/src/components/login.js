import { navigateTo } from "../router.js";
import Layout from "./layout.js";

export default function Login() {
  const content = document.createElement("div");
  content.innerHTML = `
    <h1>Iniciar Sesión</h1>
    <login-form></login-form>
    <button id="backToHome">Volver</button>
  `;

  content.querySelector("#backToHome").addEventListener("click", () => {
    navigateTo("/");
  });

  return Layout(content);
}
