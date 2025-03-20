class Sidebar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this,
      (this.shadowRoot.innerHTML = `
        <div x-data="{ open: false }" class="sidebar-container">
          <span class="sidebar-icon" @click="open = !open">
            <label for="#home">Inicio</label>
            <img src="" alt="" id="home" />
          </span>
          <div x-show="open" @click.away="open = false">
            <div class="menu-item">Home</div>
            <div class="menu-item">Profile</div>
            <div class="menu-item">Settings</div>
            <div class="menu-item">Logout</div>
          </div>
        </div>
        `);
  }
}
