import Vue from 'vue';
import Vuetify, {
  /* webpackChunkName: 'vuetify-components' */
  /* webpackMode: 'lazy-once' */
  /* webpackPrefetch: true */
  /* webpackPreload: true */
  VApp,
  VAppBar,
  VAppBarTitle,
  VBtn,
  VCard,
  VCardText,
  VCardTitle,
  VCol,
  VContainer,
  VList,
  VListItem,
  VListItemContent,
  VListItemGroup,
  VListItemSubtitle,
  VListItemTitle,
  VMain,
  VNavigationDrawer,
  VRow,
  VSnackbar,
  VTab,
  VTabs,
} from 'vuetify/lib';

Vue.use(Vuetify, {
  components: {
    VApp,
    VAppBar,
    VAppBarTitle,
    VBtn,
    VCard,
    VCardText,
    VCardTitle,
    VCol,
    VContainer,
    VList,
    VListItem,
    VListItemContent,
    VListItemGroup,
    VListItemSubtitle,
    VListItemTitle,
    VMain,
    VNavigationDrawer,
    VRow,
    VSnackbar,
    VTab,
    VTabs,
  },
});

const options = {
  presets: {
    icons: {
      iconfont: 'mdiSvg',
    },
  },
};

export default new Vuetify(options);
