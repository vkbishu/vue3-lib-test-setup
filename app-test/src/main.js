import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
//import VPlugin from "@vue-plugin-test";
//import MyPlugin from "@mylib";
import "./assets/main.css";

const app = createApp(App);

app.use(router);
//app.use(VPlugin);
//app.use(MyPlugin);

app.mount("#app");
