<script>
import HeaderComponent from "../components/Header.vue";
import FooterComponent from "../components/Footer.vue";
import MainContent from "../components/MainContent.vue";

export default {
  name: "LoginView",
  components: { MainContent, FooterComponent, HeaderComponent },
};
</script>

<template>
  <HeaderComponent />
  <main-content>
    <main class="wrapper radius">
      <div class="wrapper-header">
        <h2 class="wrapper-title">Bienvenido Usuario</h2>
        <p class="wrapper-message">
          Por favor ingresa a tu cuenta ingresando tu número de cédula y
          contraseña. Si no tienes una cuenta en TodoLegal, puedes crear una
          Gratis.
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
        </form>
        <div class="create-account">
          <a href="#">No tengo cuenta, crear una <span>gratis</span> </a>
        </div>
      </div>
      <div class="wrapper-footer">
        <button class="btn-submit" type="button">
          Continuar
          <i class="far fa-arrow-alt-circle-right"></i>
        </button>
      </div>
    </main>
  </main-content>
  <FooterComponent msg="Smart Contracts by" />
</template>

<style scoped src="../assets/css/auth-shared.css"></style>
