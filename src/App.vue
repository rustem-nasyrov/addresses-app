<template>
  <default-layout>
    <template #header>
      <app-header :tabs="tabs" />
    </template>

    <v-container fluid>
      <router-view />
    </v-container>
  </default-layout>
</template>

<script lang="ts">
import Vue from 'vue';

import AppHeader from '@/components/layout/AppHeader.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';

export default Vue.extend({
  name: 'App',

  components: { AppHeader, DefaultLayout },

  computed: {
    tabs() {
      return [
        { to: '/', label: 'О задании' },
        { to: '/map', label: 'Карта ' },
      ];
    },
  },
});
</script>
