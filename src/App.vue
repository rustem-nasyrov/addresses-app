<template>
  <default-layout>
    <template #header>
      <app-header :tabs="tabs" />
    </template>

    <router-view />
  </default-layout>
</template>

<script lang="ts">
import Vue from 'vue';

import AppHeader from '@/components/layout/AppHeader.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';

import type { AppBarTab } from '@/types';

export default Vue.extend({
  name: 'App',

  components: { AppHeader, DefaultLayout },

  computed: {
    tabs(): AppBarTab[] {
      return [
        { to: '/', label: this.$t('menu.about') },
        { to: '/map', label: this.$t('menu.map') },
      ];
    },
  },
});
</script>
