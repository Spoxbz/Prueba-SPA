const ROUTES = {
  /* Ruta de login */
  HOME: {
    BASE: "/",
  },
  LOGIN: {
    BASE: "/login-page",
  },
  SIGNUP: {
    BASE3: "/signup-page",
  },
  /* Otras rutas adicionales si son necesarias */
  ABOUT: "/about",
  CONTACT: "/contact",
  /* ruta de navegaciones para paginas laterales */
  OPTIONS: {
    BASE: "/home",
    get OPTIONONE() {
      return `${this.BASE}/option-one`;
    },
    get OPTIONTWO() {
      return `${this.BASE}/option-two`;
    },
    get OPTIONTHREE() {
      return `${this.BASE}/option-three`;
    },
  },
  /* Ruta not found */
  NOT_FOUND: "*",
};

export default ROUTES;
