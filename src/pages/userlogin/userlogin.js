// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import login from './userlogin.vue';
import particles from 'x-particles';
import vueResource from 'vue-resource';
import '../../common/css/cssreset.css';

Vue.use(particles);
Vue.use(vueResource);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<login/>',
  components: { login }
});
