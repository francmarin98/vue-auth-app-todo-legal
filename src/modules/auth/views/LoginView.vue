<script>
import HeaderComponent from "../components/Header.vue";
import FooterComponent from "../components/Footer.vue";
import MainContent from "../components/MainContent.vue";
import { ref } from "vue";
import useAuthLogin from "../composables/useAuthLogin";
import { hideLoading, showAlert } from "../utils";
import { useRouter } from "vue-router";

export default {
  name: "LoginView",
  components: { MainContent, FooterComponent, HeaderComponent },
  setup() {
    const { loginUser } = useAuthLogin();
    const router = useRouter();

    const loginForm = ref({
      username: "1758711124-2",
      password: "TTes5t20s51**",
    });

    const onLoginSubmit = async () => {
      const { ok } = await loginUser(loginForm.value);
      if (ok) {
        hideLoading();
        await router.push({ name: "home" });
      } else {
        await showAlert(
          "Error",
          "La cédula ingresada no esta registrada en el sistema.",
          "error"
        );
      }
    };

    return {
      loginForm,
      onLoginSubmit,
    };
  },
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
        <form>
          <div class="txt_field">
            <input v-model="loginForm.username" required type="text" />
            <span></span>
            <label>Cédula de Identidad</label>
          </div>
          <div class="txt_field">
            <input v-model="loginForm.password" required type="password" />
            <span></span>
            <label>Contraseña</label>
          </div>
        </form>
        <div class="create-account">
          <router-link :to="{ name: 'register' }">
            No tengo cuenta, crear una <span>gratis</span>
          </router-link>
        </div>
      </div>
      <div class="wrapper-footer">
        <button class="btn-submit" type="button" @click.prevent="onLoginSubmit">
          Continuar
          <i class="far fa-arrow-alt-circle-right"></i>
        </button>
      </div>
    </main>
  </main-content>
  <FooterComponent msg="Smart Contracts by" />
</template>

<style scoped src="../../../assets/css/auth-shared.css"></style>
