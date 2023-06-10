<template>
  <v-app-bar
    app
    shrink-on-scroll
    src="https://picsum.photos/1920/1080?random"
  >
    <v-app-bar-title>Тестовое задание SquareGPS</v-app-bar-title>
    <template #extension>
      <v-tabs>
        <v-tab
          v-for="(tab, tabIdx) in tabs"
          :key="tabIdx"
          :to="tab.to"
        >
          {{ tab.label }}
        </v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import type { AppBarTab } from '@/types';

export default Vue.extend({
  name: 'AppBar',

  props: {
    tabs: {
      type: Array as PropType<AppBarTab[]>,
      required: false,
      default: () => [],
    },
  },
})
</script>
