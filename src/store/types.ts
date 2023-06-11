import type { MarkersState } from '@/store/modules/markers/types';
import type { StoreOptions } from 'vuex';
import type { MapState } from '@/store/modules/map/types';

export type RootState = {
  strict: boolean;
  modules: {
    markers: StoreOptions<MarkersState>;
    map: StoreOptions<MapState>;
  }
}
