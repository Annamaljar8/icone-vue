import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';
//import VueCarousel from 'vue-carousel';
import VueCarousel from '@chenfengyuan/vue-carousel';


Vue.use(VueRouter);
Vue.use(VueCarousel);


const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return { selector: to.hash };
        }
        return {x: 0, y: 700};
    }
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
