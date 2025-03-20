export function loadPage(url) {
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      document.querySelector("#app").innerHTML = html;
    })
    .catch((error) => console.error("Error cargando la página:", error));
}
