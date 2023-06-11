import { UPDATE_DIALOG_VISIBILITY } from '@/store/modules/markers/consts';

import type { Module } from 'vuex';
import type { RootState } from '@/store/types';
import type { MarkersState } from '@/store/modules/markers/types';

export const MarkersModule: Module<MarkersState, RootState> = {
  namespaced: true,

  state: () => ({
    isDialogOpen: false,
    markers: [],
  }),

  mutations: {
    [UPDATE_DIALOG_VISIBILITY]: (state, isDialogOpen: boolean) => {
      state.isDialogOpen = isDialogOpen;
    },
  },

  actions: {
    setDialogVisibility: ({ commit }, isDialogOpen: boolean) => {
      commit(UPDATE_DIALOG_VISIBILITY, isDialogOpen);
    },
  },

  getters: {
    isDialogOpen: (state) => state.isDialogOpen,
  },
};
