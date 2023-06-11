<template>
  <v-dialog
    :value="isOpen"
    attach="body"
    style="z-index: 9999;"
    width="400px"
    @input="onInput"
  >
    <v-card>
      <v-card-title v-if="title">
        {{ title }}
      </v-card-title>
      <v-card-text>
        text
      </v-card-text>
      <v-card-actions>
        <v-btn>cancel</v-btn>
        <v-btn>ok</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import { VDialog, VCard, VCardTitle, VCardText, VCardActions, VBtn } from 'vuetify/lib';

type MarkerDialogOptions = {
  title: string;
}

const getDialogOptions = (): MarkerDialogOptions => ({
  title: '',
});

export default Vue.extend({
  name: 'MarkerDialog',

  components: {
    VDialog,
    VCard,
    VCardTitle,
    VCardText,
    VCardActions,
    VBtn,
  },

  props: {
    isOpen: {
      type: Boolean,
      required: false,
      default: () => false,
    },

    dialog: {
      type: Object as PropType<MarkerDialogOptions>,
      required: false,
      default: getDialogOptions,
    },
  },

  data() {
    return {
      open: this.isOpen,
    };
  },

  computed: {
    title() {
      return this.dialog.title;
    },
  },

  methods: {
    onInput(value: boolean) {
      this.$emit('on-toggle', value);
    },
  },
})
</script>
