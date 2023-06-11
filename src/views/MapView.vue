<template>
  <v-container
    fluid
    fill-height
    class="pa-0"
  >
    <v-row
      align="start"
      no-gutters
      class="fill-height"
    >
      <v-col cols="3">
        <markers-card :markers="markers" />
      </v-col>
      <v-col
        cols="9"
        class="fill-height"
      >
        <leaflet-map
          :coordinates="coordinates"
          :zoom="zoom"
          :markers="markers"
          @on-coordinates-update="setCoordinates"
          @on-zoom-update="setZoom"
          @on-add-marker="onAddMarker"
        />
        <marker-dialog
          v-if="isDialogOpen"
          :is-open="isDialogOpen"
          @on-toggle="toggleMarkerDialog"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

import { getUserCoordinates } from '@/utils';

import type { Coordinates } from '@/types';

export default Vue.extend({
  name: 'MapView',

  components: {
    MarkerDialog: () => import('@/components/dialogs/MarkerDialog.vue'),
    MarkersCard: () => import('@/components/map/MarkersCard.vue'),
    LeafletMap: () => import('@/components/map/LeafletMap.vue'),
  },

  computed: {
    ...mapGetters({
      coordinates: 'map/coordinates',
      zoom: 'map/zoom',
      markers: 'map/markers',
      isDialogOpen: 'markers/isDialogOpen',
    }),
  },

  created () {
    getUserCoordinates(this.setCoordinates);
  },

  methods: {
    ...mapActions({
      setCoordinates: 'map/setCoordinates',
      setZoom: 'map/setZoom',
      addMarker: 'map/addMarker',
      toggleMarkerDialog: 'markers/setDialogVisibility',
    }),

    onAddMarker() {
      this.toggleMarkerDialog(true);
    },
  },
});
</script>
