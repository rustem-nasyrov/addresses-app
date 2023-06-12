<template>
  <v-navigation-drawer
    :app="isMobile"
    :value="isOpen"
    :temporary="isMobile"
    disable-resize-watcher
    @input="toggleDrawer"
  >
    <div class="d-flex align-center pl-1 mb-2">
      <v-icon
        v-if="isMobile"
        small
        class="mr-2"
        @click="toggleDrawer(!isOpen)"
      >
        {{ mdiArrowLeft }}
      </v-icon>
      <h3 class="subtitle-1">
        Маркеры
      </h3>
    </div>

    <markers-list
      v-if="markers.length"
      :items="markers"
      :selected-marker-id="selectedMarkerId"
      @on-select-marker="$emit('on-select-marker', $event)"
    />
    <i
      v-else
      class="empty-list-text"
    >
      Список пуст
    </i>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import { mdiArrowLeft } from '@mdi/js';

import type { Marker } from '@/types';

export default Vue.extend({
  name: 'MarkersSidebar',

  components: {
    MarkersList: () =>
      import(
        /* webpackChunkName: 'map-view' */
        /* webpackMode: 'lazy-once' */
        /* webpackPrefetch: true */
        /* webpackPreload: true */
        '@/components/map/MarkersList.vue'
        ),
  },

  props: {
    isOpen: {
      type: Boolean,
      required: false,
      default: () => true,
    },
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

  data: () => ({
    mdiArrowLeft,
  }),

  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xsOnly;
    },
  },

  methods: {
    toggleDrawer(value: boolean) {
      this.$emit('on-toggle-drawer', value);
    },
  },
});
</script>

<style lang="scss">
.v-overlay {
  z-index: 1500;
}

.v-navigation-drawer {
  z-index: 2000;
}

.empty-list-text {
  font-size: 1rem;
  opacity: 0.5;
}
</style>
