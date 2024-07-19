import "./assets/scss/style.scss";
import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "./router";
import vSelect from "vue-select";

const app = createApp(App);
app.use(router);
app.use(VueAxios, axios);
app.component("v-select", vSelect);
app.mount("#app");