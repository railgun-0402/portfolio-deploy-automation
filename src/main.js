import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify"; // Vuetify プラグインをインポート
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

createApp(App).use(vuetify).mount("#app");
