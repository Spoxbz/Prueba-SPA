export default function Counter() {
  const container = document.createElement("div");
  container.innerHTML = `
    <h3>Contador:</h3>
    <p id="count">0</p>
    <button id="increment">Incrementar</button>
  `;

  let count = 0;
  container.querySelector("#increment").addEventListener("click", () => {
    count++;
    container.querySelector("#count").textContent = count;
  });

  return container;
}
