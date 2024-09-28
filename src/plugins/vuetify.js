// src/plugins/vuetify.js
import { createVuetify } from "vuetify";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import {
  VApp,
  VContainer,
  VRow,
  VCol,
  VIcon,
  VBtn,
  VCard,
  VList,
  VListItem,
  VListItemIcon,
  VListItemContent,
  VImg,
  VNavigationDrawer,
} from "vuetify/components";
import { VResponsive } from "vuetify/directives";

// export default createVuetify({
//   icons: {
//     iconfont: "mdi", // Material Design Icons
//   },
//   theme: {
//     // ここにカスタムテーマを設定可能
//   },
//   lang: {
//     // 言語設定が必要なら追加
//   },
// });

export default createVuetify({
  components: {
    VApp,
    VContainer,
    VRow,
    VCol,
    VIcon,
    VBtn,
    VCard,
    VList,
    VListItem,
    VListItemIcon,
    VListItemContent,
    VImg,
    VNavigationDrawer,
  },
  directives: {
    VResponsive,
  },
  icons: {
    iconfont: "mdi", // Material Design Icons
  },
});
