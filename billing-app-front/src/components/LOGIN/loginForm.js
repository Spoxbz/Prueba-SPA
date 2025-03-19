export default function LoginForm() {
  return `
    <form id="login-form">
      <label for="username">Usuario:</label>
      <input type="text" id="username" name="username" required autocomplete="name" />

      <label for="password">Contraseña:</label>
      <input type="password" id="password" name="password" required autocomplete="current-password" />

      <button class="btn" type="submit">Iniciar Sesión</button>
    </form>
  `;
}
