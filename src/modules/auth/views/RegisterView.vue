<script>
import HeaderComponent from "../components/Header.vue";
import FooterComponent from "../components/Footer.vue";
import MainContent from "../components/MainContent.vue";
import { ref } from "vue";
import useAuthRegister from "../composables/useAuthRegister";

export default {
  name: "LoginView",
  components: { MainContent, FooterComponent, HeaderComponent },
  setup() {
    const { createUser } = useAuthRegister();

    const registerForm = ref({
      username: "",
      password: "",
      confirm_password: "",
    });

    return {
      registerForm,
      onRegisterSubmit: async () => {
        await createUser(registerForm.value);
      },
    };
  },
};
</script>

<template>
  <HeaderComponent />
  <main-content>
    <main class="wrapper radius">
      <div class="wrapper-header">
        <h2 class="wrapper-title">Crear Cuenta Gratis</h2>
        <p class="wrapper-message">
          Ingresa los siguientes datos para registrarte como nuevo usuario.
        </p>
      </div>
      <div class="wrapper-content">
        <form>
          <div class="txt_field">
            <input v-model="registerForm.username" required type="number" />
            <span></span>
            <label>Cédula de Identidad</label>
          </div>
          <div class="txt_field">
            <input v-model="registerForm.password" required type="password" />
            <span></span>
            <label>Contraseña</label>
          </div>
          <div class="txt_field">
            <input required type="password" />
            <span></span>
            <label>Confirmar Contraseña</label>
          </div>
        </form>
        <div class="create-account">
          <router-link :to="{ name: 'login' }">
            Ya tengo una cuenta
          </router-link>
        </div>
      </div>
      <div class="wrapper-footer">
        <button
          class="btn-submit"
          type="button"
          @click.prevent="onRegisterSubmit"
        >
          Registrarme
          <i class="far fa-arrow-alt-circle-right"></i>
        </button>
      </div>
    </main>
  </main-content>
  <FooterComponent msg="Smart Contracts by" />
</template>

<style scoped src="../../../assets/css/auth-shared.css"></style>
