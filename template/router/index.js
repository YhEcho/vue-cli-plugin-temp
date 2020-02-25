import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const routes = [
];

export default new Router({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if(to.path === '/' && savedPosition) {
      return savedPosition;
    }
    // 异步滚动操作
    return new Promise((resolve) => {
     setTimeout(() => {
      resolve({ x: 0, y: 1 });
     }, 0);
    });
   },
});
