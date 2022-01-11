<script>
import HeaderComponent from "../components/Header.vue";
import FooterComponent from "../components/Footer.vue";

export default {
  name: "LoginView",
  components: { FooterComponent, HeaderComponent },
};
</script>

<template>
  <HeaderComponent />
  <main class="wrapper radius">
    <div class="wrapper-header">
      <h2 class="wrapper-title">Crear Cuenta Gratis</h2>
      <p class="wrapper-message">
        Ingresa los siguientes datos para registrarte como nuevo usuario.
      </p>
    </div>
    <div class="wrapper-content">
      <form method="post">
        <div class="txt_field">
          <input required type="text" />
          <span></span>
          <label>Cédula de Identidad</label>
        </div>
        <div class="txt_field">
          <input required type="password" />
          <span></span>
          <label>Contraseña</label>
        </div>
        <div class="txt_field">
          <input required type="password" />
          <span></span>
          <label>Confirmar Contraseña</label>
        </div>
      </form>
    </div>
    <div class="wrapper-footer">
      <button class="btn-submit" type="button">
        Registrarme
        <i class="far fa-arrow-alt-circle-right"></i>
      </button>
    </div>
  </main>
  <FooterComponent msg="Smart Contracts by" />
</template>

<style scoped>
.wrapper-content {
  margin-top: -5rem;
  background-color: transparent;
}

.wrapper-content form {
  height: 100%;
}

.wrapper-content form {
  padding: 0 40px;
  box-sizing: border-box;
}

form .txt_field {
  position: relative;
  background-color: var(--input-background-color);
  margin: 30px 0;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.txt_field input {
  width: 100%;
  padding: 0 15px;
  height: 60px;
  font-size: 14px;
  border: none;
  background: none;
  outline: none;
}

.txt_field label {
  position: absolute;
  top: 50%;
  left: 15px;
  color: #adadad;
  transform: translateY(-50%);
  font-size: 16px;
  pointer-events: none;
  transition: 0.5s;
}

.txt_field span::before {
  content: "";
  position: absolute;
  top: 60px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--tertiary-color);
  transition: 0.5s;
}

.txt_field input:focus ~ label,
.txt_field input:valid ~ label {
  top: 10px;
  color: var(--tertiary-color);
}

.txt_field input:focus ~ span::before,
.txt_field input:valid ~ span::before {
  width: 100%;
}
</style>
