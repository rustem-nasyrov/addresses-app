import Vue from 'vue';
import Vuex from 'vuex';

import { MapModule } from '@/store/modules/map';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    map: MapModule,
  },
});
