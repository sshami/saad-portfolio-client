import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Homepage from './components/Homepage.vue'
import Photography from './components/Photography.vue'
import Web from './components/Web.vue'
import 'popper.js'
import 'bootstrap'
import 'socicon'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  { path:'/', component: Homepage},
  { path:'/photography', component: Photography},
  { path:'/web', component: Web}
];

const router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    console.log(to);
    console.log(from);
    console.log(savedPosition);
    if (savedPosition) {
      // scroll to saved position when using browser nav
      // TODO: Fix issue with page scrolling jitter when navigating via browser arrows
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(savedPosition)
        }, 800)
      })
    } else {
      // scroll to top when navigating within app
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ x: 0, y: 0 });
        }, 800)
      })
    }
  }
});

new Vue({
  router: router, 
  render: h => h(App), 
}).$mount('#app')




