// Componente: SignupPage
import SignUpForm from "../components/SIGNUP/SignUpForm";
// Rutas
import ROUTES from "../routes/variable_routes";
// Estilos
import "../assets/styles/signup.css";

export default function SignupPage() {
  return `
    <div class="signuppage-container">
      <header>
        <h1>Regístrate para comenzar</h1>
      </header>
      <main>
        ${SignUpForm()}
        <button x-on:click="navigateTo('${ROUTES.HOME.BASE}')" class="btn">Volver</button>
      </main>
    </div>
  `;
}
