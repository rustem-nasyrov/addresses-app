<template>
  <l-map
    :zoom="mapZoom"
    :center="center"
    class="fill-height"
    @update:zoom="onZoomUpdate"
    @update:center="onCenterUpdate"
    @click="onMapClick"
  >
    <l-tile-layer
      :url="url"
      :attribution="attribution"
    />
    <l-control position="bottomright">
      <v-btn
        fab
        color="primary"
        @click="onAddMarkerClick"
      >
        <v-icon>
          {{ mdiPlus }}
        </v-icon>
      </v-btn>
    </l-control>
    <template v-if="markers.length">
      <l-marker
        v-for="marker in markers"
        :key="marker.id"
        :lat-lng="marker.coordinates"
      />
    </template>
  </l-map>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import { VBtn } from 'vuetify/lib';
import { mdiPlus } from '@mdi/js';

import L, {LeafletMouseEvent} from 'leaflet';
import { LControl, LMap, LMarker, LTileLayer } from 'vue2-leaflet';
import { latLng } from 'leaflet';

import type { Coordinates, Marker } from '@/types';
import { DEFAULT_COORDINATES, DEFAULT_ZOOM } from '@/store/modules/map/consts';
import { MAP_ATTRIBUTION, OPEN_STREET_MAP_URL } from '@/consts';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

type LeafletMapData = {
  url: string;
  attribution: string;
  mapZoom: number;
  center: Coordinates | [];
  [key: string]: unknown;
}

export default Vue.extend({
  name: 'LeafletMap',

  components: {
    VBtn,
    LControl,
    LMap,
    LMarker,
    LTileLayer,
  },

  props: {
    coordinates: {
      type: Array as unknown as PropType<Coordinates>,
      required: false,
      default: () => DEFAULT_COORDINATES,
    },
    zoom: {
      type: Number,
      required: false,
      default: () => DEFAULT_ZOOM,
    },
    markers: {
      type: Array as PropType<Marker[]>,
      required: false,
      default: () => [],
    },
  },

  data(): LeafletMapData {
    return {
      attribution: MAP_ATTRIBUTION,
      center: this.coordinates,
      url: OPEN_STREET_MAP_URL,
      mapZoom: this.zoom,
      mdiPlus,
    };
  },

  methods: {
    onZoomUpdate(zoom: number) {
      this.mapZoom = zoom;
      this.$emit('on-zoom-update', zoom);
    },

    onCenterUpdate({ lat, lng }: { lat: number, lng: number }) {
      this.center = [lat, lng];
      this.$emit('on-coordinates-update', [lat, lng]);
    },

    onMapClick({ latlng }: LeafletMouseEvent) {
      this.addMarker([latlng.lat, latlng.lng])
    },

    onAddMarkerClick() {
      this.addMarker(this.center as Coordinates);
    },

    addMarker(coordinates: Coordinates) {
      this.$emit('on-add-marker', coordinates);
    },
  },
});
</script>

<style scoped lang="scss">
@import 'leaflet/dist/leaflet.css';
</style>
