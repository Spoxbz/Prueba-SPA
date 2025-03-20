// import { navigateTo } from "../router";
import Counter from "./counter.js";
import Layout from "./layout";

export default function Home() {
  const content = document.createElement("div");
  content.innerHTML = `
      <h1>Bienvenido a la Home</h1>
      <div id="dynamic-content"></div>
      `;

  // <button id="goToLogin">Ir a Login</button>
  // content.querySelector("#goToLogin").addEventListener("click", () => {
  //   navigateTo("/login");
  // });

  content.querySelector("#dynamic-content").appendChild(Counter());

  return Layout(content);
}
