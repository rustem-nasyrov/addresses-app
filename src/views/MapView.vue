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
        <markers-card
          :markers="markers"
          :selected-marker-id="selectedMarkerId"
          @on-select-marker="onSelectMarker"
        />
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
          @on-marker-click="onSelectMarker"
        />
        <v-snackbar
          :value="snackbar.visible"
          top
          right
          absolute
          :color="snackbar.color"
          :timeout="timeout"
          @input="closeSnackbar"
        >
          {{ snackbar.message }}
        </v-snackbar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

import { SNACKBAR_TIMEOUT } from '@/consts';
import { getUserCoordinates } from '@/utils';

import type { Coordinates } from '@/types';

export default Vue.extend({
  name: 'MapView',

  components: {
    MarkersCard: () =>
      import(
        /* webpackChunkName: 'map-view' */
        /* webpackMode: 'lazy' */
        /* webpackPrefetch: true */
        /* webpackPreload: true */
        '@/components/map/MarkersCard.vue'
      ),
    LeafletMap: () =>
      import(
        /* webpackChunkName: 'map-view' */
        /* webpackMode: 'lazy' */
        /* webpackPrefetch: true */
        /* webpackPreload: true */
        '@/components/map/LeafletMap.vue'
      ),
  },

  computed: {
    ...mapGetters({
      coordinates: 'map/coordinates',
      markers: 'markers/markers',
      selectedMarkerId: 'map/selectedMarkerId',
      snackbar: 'markers/snackbar',
      zoom: 'map/zoom',
    }),
    timeout: () => SNACKBAR_TIMEOUT,
  },

  async created() {
    await this.getAllMarkers();
    getUserCoordinates(this.setCoordinates);
  },

  methods: {
    ...mapActions({
      addMarker: 'markers/addMarker',
      selectMarkerId: 'map/selectMarkerId',
      setCoordinates: 'map/setCoordinates',
      setZoom: 'map/setZoom',
      updateSnackbar: 'markers/updateSnackbar',
      getAllMarkers: 'markers/getMarkers',
    }),

    onAddMarker(coordinates: Coordinates) {
      this.addMarker(coordinates);
    },

    closeSnackbar(value: boolean) {
      this.updateSnackbar({
        visible: value,
        message: '',
      });
    },

    onSelectMarker(id?: number) {
      if (!id) {
        this.$router.push({ name: 'map' });
        this.selectMarkerId(null);
      } else {
        const { coordinates } = this.markers.find((m: { id: number }) => m.id === id) || {};

        if (coordinates) {
          this.selectMarkerId(id);
          this.setCoordinates(coordinates);
          this.$router.push({ name: 'marker', params: { id: id.toString() } });
        }
      }
    },
  },
});
</script>

<style lang="scss">
.v-snack {
  z-index: 999;
}
</style>
