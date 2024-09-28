// src/plugins/vuetify.js
import { createVuetify } from "vuetify";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

export default createVuetify({
  icons: {
    iconfont: "mdi", // Material Design Icons
  },
  theme: {
    // ここにカスタムテーマを設定可能
  },
  lang: {
    // 言語設定が必要なら追加
  },
});
