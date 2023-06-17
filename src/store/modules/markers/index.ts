import {
  ADD_MARKER,
  REPLACE_MARKERS,
  SNACKBAR_ERROR_COLOR,
  SNACKBAR_SUCCESS_COLOR,
  UPDATE_SNACKBAR,
} from '@/store/modules/markers/consts';
import { SUCCESS_STATUS_TEXT } from '@/consts';

import type { Module } from 'vuex';
import type { Coordinates, GeocodeData, Marker } from '@/types';
import type { RootState } from '@/store/types';
import type { MarkersState } from '@/store/modules/markers/types';

import i18n from '@/locales';
import { backendService } from '@/services/backend';
import { geocodeService } from '@/services/geocode';

type SnackBar = MarkersState['snackbar'];

const createMarker = (data: GeocodeData): Marker => {
  return {
    ...data,
    coordinates: [+data.latitude, +data.longitude],
  };
};

export const MarkersModule: Module<MarkersState, RootState> = {
  namespaced: true,

  state: () => ({
    markers: [],
    snackbar: {
      visible: false,
      message: '',
      color: '',
    },
  }),

  mutations: {
    [ADD_MARKER]: (state, marker) => {
      state.markers.push(marker);
    },

    [REPLACE_MARKERS]: (state, markers: Marker[]) => {
      state.markers = markers;
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
          color: SNACKBAR_ERROR_COLOR,
        });
      } else if (data) {
        const markers = getters.markers;

        if (markers.findIndex((m: Marker) => m.id === data.id) > -1) {
          await dispatch('updateSnackbar', {
            message: i18n.t('messages-codes.marker-already-added'),
            visible: true,
            color: SNACKBAR_ERROR_COLOR,
          });
        } else {
          const marker = createMarker(data);
          const { status, message} = await backendService.addMarker<Marker>(marker);

          if (SUCCESS_STATUS_TEXT === status) {
            await dispatch('updateSnackbar', {
              message,
              visible: true,
              color: SNACKBAR_SUCCESS_COLOR,
            });
            commit(ADD_MARKER, marker);
          } else {
            await dispatch('updateSnackbar', {
              message,
              visible: true,
              color: SNACKBAR_ERROR_COLOR,
            });
          }
        }
      }
    },

    updateSnackbar: ({ commit }, snackbar: SnackBar) => {
      commit(UPDATE_SNACKBAR, snackbar);
    },

    getMarkers: async ({ commit, dispatch }) => {
      const { status, message, data } = await backendService.getAllMarkers();

      if (SUCCESS_STATUS_TEXT === status) {
        commit(REPLACE_MARKERS, data);
      } else {
        await dispatch('updateSnackbar', {
          message,
          visible: true,
          color: SNACKBAR_ERROR_COLOR,
        });
      }
    },
  },

  getters: {
    markers: (state) => state.markers,
    snackbar: (state) => state.snackbar,
  },
};
