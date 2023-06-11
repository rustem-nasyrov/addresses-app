import Vue from 'vue';
import Vuex from 'vuex';

import type { RootState } from '@/store/types';

import { MarkersModule } from '@/store/modules/markers';
import { MapModule } from '@/store/modules/map';

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    map: MapModule,
    markers: MarkersModule,
  },
});
