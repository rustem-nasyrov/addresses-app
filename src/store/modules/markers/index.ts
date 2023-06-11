import { ADD_MARKER, UPDATE_SNACKBAR } from '@/store/modules/markers/consts';

import type { Module } from 'vuex';
import type { Coordinates, GeocodeData, Marker } from '@/types';
import type { RootState } from '@/store/types';
import type { MarkersState } from '@/store/modules/markers/types';

import { geocodeService } from '@/services/geocode';

type SnackBar = MarkersState['snackbar'];

const createMarker = (data: GeocodeData): Marker => {
  return {
    ...data,
    coordinates: [+data.latitude, +data.longitude],
  }
}

export const MarkersModule: Module<MarkersState, RootState> = {
  namespaced: true,

  state: () => ({
    markers: [],
    snackbar: {
      visible: false,
      message: '',
    },
  }),

  mutations: {
    [ADD_MARKER]: (state, marker) => {
      state.markers.push(marker);
    },

    [UPDATE_SNACKBAR]: (state, snackbar: SnackBar) => {
      state.snackbar = snackbar;
    },
  },

  actions: {
    addMarker: async ({ commit, dispatch, getters }, coordinates: Coordinates) => {
      const [data, error] = await geocodeService.getStreet(coordinates);

      if (error) {
        await dispatch('updateSnackbar', {
          visible: true,
          message: error,
        });
      } else if (data) {
        const markers = getters.markers;

        if (markers.findIndex((m: Marker) => m.id === data.id) > -1) {
          await dispatch('updateSnackbar', {
            visible: true,
            message: 'Already added',
          })
        } else {
          commit(ADD_MARKER, createMarker(data));
        }
      }
    },

    updateSnackbar: ({ commit }, snackbar: SnackBar) => {
      commit(UPDATE_SNACKBAR, snackbar);
    },
  },

  getters: {
    markers: (state) => state.markers,
    snackbarMessage: (state) => state.snackbar.message,
    snackbarVisible: (state) => state.snackbar.visible,
  },
};
