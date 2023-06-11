<template>
  <v-list
    nav
    dense
  >
    <v-list-item-group
      :value="selectedMarkerId"
      @change="$emit('on-select-marker', $event)"
    >
      <v-list-item
        v-for="item in items"
        :key="item.id"
        :value="item.id"
      >
        <v-list-item-content>
          <v-list-item-title>
            {{ item.displayName }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ item.latitude }}, {{ item.longitude }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import {
  VList,
  VListItem,
  VListItemContent,
  VListItemGroup,
  VListItemSubtitle,
  VListItemTitle,
} from 'vuetify/lib';

import type { Marker } from '@/types';

export default Vue.extend({
  name: 'MarkersList',

  components: {
    VList,
    VListItem,
    VListItemContent,
    VListItemSubtitle,
    VListItemTitle,
    VListItemGroup,
  },

  props: {
    selectedMarkerId: {
      type: [Number, null] as PropType<number | null>,
      required: false,
      default: () => null,
    },
    items: {
      type: Array as PropType<Marker[]>,
      required: false,
      default: () => [],
    },
  },
});
</script>
