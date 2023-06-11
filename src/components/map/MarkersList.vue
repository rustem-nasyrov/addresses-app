<template>
  <v-list
    nav
    dense
  >
    <v-list-item
      v-for="item in items"
      :key="item.id"
      :to="{ name: 'marker', params: { id: item.id } }"
    >
      <v-list-item-content>
        <v-list-item-title>
          {{ item.displayName }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ item.coordinates | formatCoordinates }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import {
  VList,
  VListItem,
  VListItemContent,
  VListItemSubtitle,
  VListItemTitle,
} from 'vuetify/lib';

import type { Coordinates, Marker } from '@/types';

export default Vue.extend({
  name: 'MarkersList',

  components: {
    VList,
    VListItem,
    VListItemContent,
    VListItemSubtitle,
    VListItemTitle,
  },

  filters: {
    formatCoordinates([latitude, longitude]: Coordinates) {
      return `${latitude}, ${longitude}`
    },
  },

  props: {
    items: {
      type: Array as PropType<Marker[]>,
      required: false,
      default: () => [],
    },
  },
});
</script>
