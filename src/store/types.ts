import { StoreOptions } from 'vuex';

export type NamespacedStoreOptions<Store> = StoreOptions<Store> & { namespaced: boolean };
