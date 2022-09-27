import { createApp, VueElement } from "vue";
import App from "./App.vue";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.css";

createApp.use(BootstrapVue);
new VueElement({
  render: (h) => h(App),
});

createApp(App).mount("#app");
