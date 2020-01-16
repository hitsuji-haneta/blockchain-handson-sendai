import Vue from 'vue';
import VueRouter from 'vue-router';
import App from "./App";
import Hello from './page/Hello.vue';
import Owner from './page/Owner.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Hello },
  { path: '/owner', component: Owner }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')