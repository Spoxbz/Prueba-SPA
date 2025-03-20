import renderComponent, { navigateTo } from "./router.js";
import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  renderComponent(location.pathname);
  document.querySelectorAll("[x-on\\:click]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const route = btn.getAttribute("x-on:click").match(/'([^']+)'/)[1];
      navigateTo(route);
    });
  });
});
