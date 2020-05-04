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
  mode: 'history'
});

new Vue({
  router: router, 
  render: h => h(App), 
}).$mount('#app')




