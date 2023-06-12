<template>
  <v-app-bar
    app
    shrink-on-scroll
    flat
    :src="require('@/assets/images/cover.jpeg')"
  >
    <v-app-bar-title>{{ $t('appName') }}</v-app-bar-title>

    <v-spacer />

    <language-switcher />

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

import { VSpacer } from 'vuetify/lib';

import LanguageSwitcher from '@/components/ui/LanguageSwitcher.vue';

export default Vue.extend({
  name: 'AppBar',

  components: {
    VSpacer,
    LanguageSwitcher,
  },

  props: {
    tabs: {
      type: Array as PropType<AppBarTab[]>,
      required: false,
      default: () => [],
    },
  },
});
</script>
