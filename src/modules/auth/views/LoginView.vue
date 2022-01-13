<template>
  <HeaderComponent />
  <main-content>
    <main class="wrapper animate__animated animate__fadeIn radius">
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
          <div class="txt_field field-icon">
            <div class="icon">
              <i
                class="fa fa-info-circle tooltip"
                @click="isHovering = !isHovering"
              ></i>
              <span :class="{ 'show-tooltip': isHovering }" class="tooltip-box">
                Tú cédula debe encontrarse vigente para ingresar al sistema.
              </span>
            </div>
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
        <button
          :disabled="isInvalidLoginForm"
          class="btn-submit"
          type="button"
          @click.prevent="onLoginSubmit"
        >
          Continuar
          <i class="far fa-arrow-alt-circle-right"></i>
        </button>
      </div>
    </main>
  </main-content>
  <FooterComponent msg="Smart Contracts by" />
</template>

<script>
import HeaderComponent from "../components/Header.vue";
import FooterComponent from "../components/Footer.vue";
import MainContent from "../components/MainContent.vue";
import { computed, ref } from "vue";
import useAuthLogin from "../composables/useAuthLogin";
import { hideLoading, showAlert } from "../utils";
import { useRouter } from "vue-router";

export default {
  name: "LoginView",
  components: { MainContent, FooterComponent, HeaderComponent },
  setup() {
    const isHovering = ref(false);
    const { loginUser } = useAuthLogin();
    const router = useRouter();

    const loginForm = ref({
      username: "",
      password: "",
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
      isHovering,
      isInvalidLoginForm: computed(() => {
        const { username, password } = loginForm.value;
        return !(username.length > 0 && password.length > 0);
      }),
    };
  },
};
</script>

<style scoped src="../../../assets/css/auth-shared.css"></style>
