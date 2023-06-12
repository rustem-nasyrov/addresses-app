<template>
  <v-card
    flat
    class="markers-card"
  >
    <v-card-title>Маркеры</v-card-title>
    <v-card-text>
      <markers-list
        v-if="markers.length"
        :items="markers"
        :selected-marker-id="selectedMarkerId"
        @on-select-marker="$emit('on-select-marker', $event)"
      />
      <i v-else>Список пуст</i>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import type { Marker } from '@/types';

export default Vue.extend({
  name: 'MarkersCard',

  components: {
    MarkersList: () => import(
      /* webpackChunkName: 'map-view' */
      /* webpackMode: 'lazy-once' */
      /* webpackPrefetch: true */
      /* webpackPreload: true */
      '@/components/map/MarkersList.vue',
    ),
  },

  props: {
    selectedMarkerId: {
      type: [Number, null] as PropType<number | null>,
      required: false,
      default: () => null,
    },
    markers: {
      type: Array as PropType<Marker[]>,
      required: false,
      default: () => [],
    },
  },
});
</script>

<style scoped lang="scss">
.markers-card {
  .v-list {
    padding: 0;

    &-item {
      padding: 0;
    }
  }
}
</style>
