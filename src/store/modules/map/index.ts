import {
  DEFAULT_COORDINATES,
  DEFAULT_ZOOM,
  UPDATE_COORDINATES,
  UPDATE_MARKERS,
  UPDATE_ZOOM,
} from '@/store/modules/map/consts';

import type { Module } from 'vuex';
import type { RootState } from '@/store/types';
import type { MapState } from '@/store/modules/map/types';
import type { Coordinates, Marker } from '@/types';

const createMarker = (coordinates: Coordinates): Marker => {
  const id = Math.floor(Math.random() * 100).toString();
  const label = `Marker ${id}`;

  return {
    id,
    label,
    coordinates,
  }
}

export const MapModule: Module<MapState, RootState> = {
  namespaced: true,

  state: () => ({
    zoom: DEFAULT_ZOOM,
    coordinates: DEFAULT_COORDINATES,
    markers: [],
  }),

  mutations: {
    [UPDATE_COORDINATES]: (state, coordinates: Coordinates) => {
      state.coordinates = coordinates;
    },

    [UPDATE_ZOOM]: (state, zoom: number) => {
      state.zoom = zoom;
    },

    [UPDATE_MARKERS]: (state, markers: Marker[]) => {
      state.markers = markers;
    },
  },

  actions: {
    addMarker: ({ commit, state }, coordinates) => {
      const markers = state.markers.slice();

      markers.push(createMarker(coordinates));
      commit(UPDATE_MARKERS, markers);
    },

    setCoordinates: ({commit}, coordinates: Coordinates) => {
      commit(UPDATE_COORDINATES, coordinates);
    },

    setZoom: ({commit}, zoom) => {
      commit(UPDATE_ZOOM, zoom);
    },
  },

  getters: {
    coordinates: (state) => state.coordinates,
    markers: (state) => state.markers,
    zoom: (state) => state.zoom,
  },
}
