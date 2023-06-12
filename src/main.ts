import Vue from 'vue';

import vuetify from '@/plugins/vuetify';
import router from '@/router';
import store from '@/store';
import i18n from '@/locales';

import App from '@/App.vue';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
