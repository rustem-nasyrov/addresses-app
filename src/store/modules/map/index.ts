import {
  DEFAULT_COORDINATES,
  DEFAULT_ZOOM,
  UPDATE_COORDINATES,
  UPDATE_ZOOM,
  SELECT_MARKER_ID,
} from '@/store/modules/map/consts';

import type { Module } from 'vuex';
import type { RootState } from '@/store/types';
import type { MapState } from '@/store/modules/map/types';
import type { Coordinates } from '@/types';

export const MapModule: Module<MapState, RootState> = {
  namespaced: true,

  state: () => ({
    coordinates: DEFAULT_COORDINATES,
    selectedMarkerId: null,
    zoom: DEFAULT_ZOOM,
  }),

  mutations: {
    [UPDATE_COORDINATES]: (state, coordinates: Coordinates) => {
      state.coordinates = coordinates;
    },

    [UPDATE_ZOOM]: (state, zoom: number) => {
      state.zoom = zoom;
    },

    [SELECT_MARKER_ID]: (state, id: number) => {
      state.selectedMarkerId = id;
    },
  },

  actions: {
    selectMarkerId: ({ commit }, id: number) => {
      commit(SELECT_MARKER_ID, id);
    },

    setCoordinates: ({ commit }, coordinates: Coordinates) => {
      commit(UPDATE_COORDINATES, coordinates);
    },

    setZoom: ({ commit }, zoom) => {
      commit(UPDATE_ZOOM, zoom);
    },
  },

  getters: {
    coordinates: (state) => state.coordinates,
    selectedMarkerId: (state) => state.selectedMarkerId,
    zoom: (state) => state.zoom,
  },
};
