/*!

 =========================================================
 * Vue Now UI Kit Pro - v1.3.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/vue-now-ui-kit-pro
 * Copyright 2023 Creative Tim (http://www.creative-tim.com)

 * Designed by www.invisionapp.com Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
//plugins
import NowUIKit from "./plugins/now-ui-kit";

Vue.config.productionTip = false;
Vue.use(NowUIKit);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
