import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify"; // Vuetify プラグインをインポート

const app = createApp(App);
app.use(vuetify);
createApp(App).use(vuetify).mount("#app");
