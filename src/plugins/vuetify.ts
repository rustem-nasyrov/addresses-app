import Vue from 'vue';
import Vuetify, { VApp, VAppBar, VAppBarTitle, VCol, VContainer, VMain, VRow, VTab, VTabs } from 'vuetify/lib';

Vue.use(Vuetify, {
  components: { VApp, VAppBar, VAppBarTitle, VCol, VContainer, VMain, VRow, VTab, VTabs },
});

export default new Vuetify();
