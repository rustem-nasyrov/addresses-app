import { DEFAULT_COORDINATES, DEFAULT_ZOOM, UPDATE_COORDINATES, UPDATE_ZOOM } from '@/store/modules/map/consts';

import type { NamespacedStoreOptions } from '@/store/types';
import type { MapState } from '@/store/modules/map/types';
import type { Coordinates } from '@/types';

export const MapModule: NamespacedStoreOptions<MapState> = {
  namespaced: true,

  state: () => ({
    zoom: DEFAULT_ZOOM,
    coordinates: DEFAULT_COORDINATES,
  }),

  mutations: {
    [UPDATE_COORDINATES]: (state, coordinates: Coordinates) => {
      state.coordinates = coordinates;
    },

    [UPDATE_ZOOM]: (state, zoom: number) => {
      state.zoom = zoom;
    },
  },

  actions: {
    setCoordinates: ({ commit }, coordinates: Coordinates) => {
      commit(UPDATE_COORDINATES, coordinates);
    },

    setZoom: ({ commit }, zoom) => {
      commit(UPDATE_ZOOM, zoom);
    },
  },

  getters: {
    coordinates: (state) => state.coordinates,
    zoom: (state) => state.zoom,
  },
}
