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
      <v-col
        cols="12"
        class="fill-height d-flex"
      >
        <markers-sidebar
          :is-open="isDrawerOpen"
          :markers="markers"
          :selected-marker-id="selectedMarkerId"
          class="col-3"
          @on-select-marker="onSelectMarker"
          @on-toggle-drawer="onToggleDrawer"
        />
        <leaflet-map
          :coordinates="coordinates"
          :zoom="zoom"
          :markers="markers"
          class="9"
          @on-coordinates-update="setCoordinates"
          @on-zoom-update="setZoom"
          @on-add-marker="onAddMarker"
          @on-marker-click="onSelectMarker"
          @on-toggle-drawer="onToggleDrawer(!isDrawerOpen)"
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
    MarkersSidebar: () =>
      import(
        /* webpackChunkName: 'map-view' */
        /* webpackMode: 'lazy' */
        /* webpackPrefetch: true */
        /* webpackPreload: true */
        '@/components/map/MarkersSidebar.vue'
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

  data: () => ({
    isDrawerOpen: false,
  }),

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
    this.isDrawerOpen = !this.$vuetify.breakpoint.xs;
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

    onToggleDrawer(value: boolean) {
      this.isDrawerOpen = value;
    },

    closeSnackbar(value: boolean) {
      this.updateSnackbar({
        visible: value,
        message: '',
      });
    },

    onSelectMarker(id?: number) {
      if (!id) {
        if (this.$route.name !== 'map') {
          this.$router.push({ name: 'map' });
        }

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
  z-index: 3000;
}
</style>
