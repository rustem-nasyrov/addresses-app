<template>
  <v-card
    flat
    class="markers-card"
  >
    <v-card-title>Маркеры</v-card-title>
    <v-card-text>
      <markers-list :items="markers" />
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import {
  VCard,
  VCardText,
  VCardTitle,
} from 'vuetify/lib';

import type { Marker } from '@/types';

export default Vue.extend({
  name: 'MarkersCard',

  components: {
    MarkersList: () => import('@/components/map/MarkersList.vue'),
    VCard,
    VCardText,
    VCardTitle,
  },

  props: {
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
