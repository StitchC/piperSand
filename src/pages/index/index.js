// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import index from './index.vue';
import vTooltip from 'v-tooltip';

import '../../common/css/cssreset.css';
import '../../common/css/cusIcon.styl';

Vue.use(vTooltip);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<index/>',
  components: {
    index
  }
});
