import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import Swal from 'sweetalert2/dist/sweetalert2.js'
import "sweetalert2/src/sweetalert2.scss";

const app = createApp(App);
app.use(store);
app.use(router);

app.mount("#app");
