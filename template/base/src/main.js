import Vue from 'vue'
import App from "./App.vue";
<%_ if (options.router) { _%>
import router from './router' 
<%_ } _%>
<%_ if (options.vuex) { _%>
import store from './store' 
<%_ } _%>

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
<%_ if (options.router) { _%>
  router,
<%_ } _%>
<%_ if (options.vuex) { _%>
  store
<%_ } _%>
}).$mount("#app");