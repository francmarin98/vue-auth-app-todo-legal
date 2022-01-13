import { createStore } from "vuex";
import authVuexModule from "../modules/auth/store";

const store = createStore({
  modules: {
    auth: authVuexModule,
  },
});

export default store;
