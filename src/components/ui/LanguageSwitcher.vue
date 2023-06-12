<template>
  <v-menu offset-y>
    <template #activator="{ on, attrs }">
      <v-btn
        icon
        fab
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>{{ mdiWeb }}</v-icon>
      </v-btn>
    </template>

    <v-list dense>
      <v-list-item-group
        :value="currentLocale"
        color="primary"
      >
        <v-list-item
          v-for="locale in locales"
          :key="locale.key"
          :value="locale.key"
          @click="setLocale(locale.key)"
        >
          {{ locale.label }}
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import Vue from 'vue';

import { mdiWeb } from '@mdi/js';

import type { FallbackLocale } from 'vue-i18n';

import { LOCAL_STORAGE_LOCALE_KEY } from '@/consts';

export default Vue.extend({
  name: 'LanguageSwitcher',

  data: () => ({
    mdiWeb,
  }),

  computed: {
    currentLocale() {
      return this.$i18n.locale;
    },

    locales() {
      return this.$i18n.availableLocales.map((key) => ({
        key,
        label: this.$t(key),
      }));
    },
  },

  created () {
    this.setLocale(this.getLocale() as string);
  },

  methods: {
    getLocale(): FallbackLocale {
      return window.localStorage.getItem(LOCAL_STORAGE_LOCALE_KEY) || this.$i18n.fallbackLocale;
    },

    setLocale(locale: string) {
      this.$i18n.locale = locale;
      window.localStorage.setItem(LOCAL_STORAGE_LOCALE_KEY, locale);
    },
  },
});
</script>
