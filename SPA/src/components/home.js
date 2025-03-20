import { navigateTo } from "../router";
import Counter from "./counter,js";

export default function Home() {
  const container = document.createElement("div");
  container.innerHTML = `
      <h1>Bienvenido a la Home</h1>
      <button id="goToLogin">Ir a Login</button>
      <div id="dynamic-content"></div>
    `;

  container.querySelector("#goToLogin").addEventListener("click", () => {
    navigateTo("/login");
  });

  container.querySelector("#dynamic-content").appendChild(Counter());

  return container;
}
