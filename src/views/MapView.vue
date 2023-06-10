<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-card>
          <v-card-title>Маркеры</v-card-title>
          <v-card-text>
            <v-list
              nav
              dense
            >
              <v-list-item
                v-for="marker in markers"
                :key="marker.id"
                :to="{ name: 'marker', params: { id: marker.id } }"
              >
                <v-list-item-content>
                  <v-list-item-title>
                    {{ marker.label }}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ marker.coordinates | formatCoordinates }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="7">
        map
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  VCard,
  VCardText,
  VCardTitle,
  VList,
  VListItem,
  VListItemContent,
  VListItemSubtitle,
  VListItemTitle,
} from 'vuetify/lib';

import type { Marker, MarkerCoordinates } from '@/types';

export default Vue.extend({
  name: 'MapView',

  components: {
    VCard,
    VCardText,
    VCardTitle,
    VList,
    VListItem,
    VListItemContent,
    VListItemSubtitle,
    VListItemTitle,
  },

  filters: {
    formatCoordinates({ latitude, longitude }: MarkerCoordinates) {
      return `${latitude}, ${longitude}`
    },
  },

  data: () => ({
    currentMarker: null,
  }),

  computed: {
    markers(): Marker[] {
      return [
        {
          id: crypto.randomUUID(),
          label: 'Marker #1',
          coordinates: {
            latitude: '53.2734',
            longitude: '-7.77832031',
          },
        },
        {
          id: crypto.randomUUID(),
          label: 'Marker #2',
          coordinates: {
            latitude: '53.2734',
            longitude: '-7.77832031',
          },
        },
      ];
    },
  },
});
</script>
