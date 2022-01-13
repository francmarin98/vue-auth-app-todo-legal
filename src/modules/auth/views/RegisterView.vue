<template>
  <HeaderComponent />
  <main-content>
    <main class="wrapper radius animate__animated animate__fadeIn">
      <div class="wrapper-header">
        <h2 class="wrapper-title">Crear Cuenta Gratis</h2>
        <p class="wrapper-message">
          Ingresa los siguientes datos para registrarte como nuevo usuario.
        </p>
      </div>
      <div class="wrapper-content">
        <form>
          <div class="txt_field">
            <input v-model="registerForm.username" required type="text" />
            <span></span>
            <label>Cédula de Identidad</label>
          </div>
          <div class="txt_field">
            <input v-model="registerForm.password" required type="password" />
            <span></span>
            <label>Contraseña</label>
          </div>
          <div class="txt_field">
            <input
              v-model="registerForm.confirm_password"
              required
              type="password"
            />
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
          :disabled="isInvalidRegisterForm"
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

<script>
import HeaderComponent from "../components/Header.vue";
import FooterComponent from "../components/Footer.vue";
import MainContent from "../components/MainContent.vue";
import { computed, ref } from "vue";
import useAuthRegister from "../composables/useAuthRegister";
import { showAlert } from "../utils";

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

    const resetForm = () => {
      registerForm.value.username = "";
      registerForm.value.password = "";
      registerForm.value.confirm_password = "";
    };

    const onRegisterSubmit = async () => {
      const { password, confirm_password } = registerForm.value;
      if (password !== confirm_password) {
        await showAlert("Error", "La contraseñas deben ser iguales", "error");
        return;
      }

      const { ok, msg } = await createUser(registerForm.value);
      if (ok) {
        resetForm();
        await showAlert("Éxito", msg);
      } else {
        await showAlert("Error", msg);
      }
    };

    return {
      registerForm,
      onRegisterSubmit,
      isInvalidRegisterForm: computed(() => {
        const { username, password, confirm_password } = registerForm.value;
        return !(
          username.length > 0 &&
          password.length > 0 &&
          confirm_password.length > 0
        );
      }),
    };
  },
};
</script>

<style scoped src="../../../assets/css/auth-shared.css"></style>
