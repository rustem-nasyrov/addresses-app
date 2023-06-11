import type { AppDialogState } from '@/store/modules/app-dialog/types';
import type { StoreOptions } from 'vuex';
import type { MapState } from '@/store/modules/map/types';

export type RootState = {
  strict: boolean;
  modules: {
    appDialog: StoreOptions<AppDialogState>;
    map: StoreOptions<MapState>;
  }
}
