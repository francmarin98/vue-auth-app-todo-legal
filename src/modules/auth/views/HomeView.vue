<script>
import HeaderComponent from "../components/Header.vue";
import FooterComponent from "../components/Footer.vue";
import MainContent from "../components/MainContent.vue";
import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useAuthLogout } from "../composables/useAuthLogout";

export default {
  name: "HomeView",
  components: {
    MainContent,
    FooterComponent,
    HeaderComponent,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const { logout } = useAuthLogout();
    return {
      name: computed(() => store.getters["getFullName"]),
      username: computed(() => store.getters["getUsername"]),
      onLogout: () => {
        router.push({ name: "login" });
        logout();
      },
    };
  },
};
</script>

<template>
  <HeaderComponent />
  <main-content>
    <main class="wrapper radius animate__animated animate__fadeIn">
      <div class="wrapper-header">
        <img
          alt="check-icon"
          class="check-icon"
          src="../../../assets/icons/check-icon.svg"
        />
        <h2>¡Validación Exitosa!</h2>
      </div>
      <div class="wrapper-content radius">
        <h3>Datos verificados:</h3>
        <div class="form-control">
          <label>Nombres y Apellidos</label>
          <p>{{ name }}</p>
        </div>
        <div class="form-control">
          <label>Cédula de Identidad</label>
          <p>{{ username }}</p>
        </div>
      </div>
      <div class="wrapper-footer">
        <button class="btn-submit" type="button" @click="onLogout()">
          Finalizar
          <i class="far fa-arrow-alt-circle-right"></i>
        </button>
      </div>
    </main>
  </main-content>
  <FooterComponent />
</template>

<style>
.check-icon {
  margin: 0.5rem auto 0 auto;
  width: 3.5rem;
  height: 3.5rem;
}

.wrapper-header h2 {
  color: var(--primary-color);
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
}

.wrapper-content h3 {
  color: var(--primary-color);
  font-size: 1.4rem;
  position: relative;
  margin-bottom: 2.5rem;
}

.wrapper-content h3::after {
  content: "";
  position: absolute;
  background-color: var(--primary-color);
  left: 0;
  top: 150%;
  width: 20%;
  height: 2px;
}

.form-control label {
  color: var(--primary-color);
  font-size: 1.4rem;
}

.form-control p {
  font-size: 1.2rem;
}

.wrapper-footer {
  margin-right: 2.5rem;
  justify-self: end;
}

@media screen and (max-width: 767px) {
  .wrapper-content h3::after {
    width: 35%;
  }
}
</style>
