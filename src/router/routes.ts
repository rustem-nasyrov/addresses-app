import type { RouteConfig } from 'vue-router';

export const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: () =>
      import(
        /* webpackChunkName: 'home-view' */
        /* webpackMode: 'lazy-once' */
        /* webpackPrefetch: true */
        /* webpackPreload: true */
        '@/views/HomeView.vue'
      ),
  },
  {
    path: '/map',
    name: 'map',
    component: () =>
      import(
        /* webpackChunkName: 'map-view' */
        /* webpackMode: 'lazy-once' */
        /* webpackPrefetch: true */
        /* webpackPreload: true */
        '@/views/MapView.vue'
      ),
    children: [
      {
        path: '/map/:id',
        name: 'marker',
      },
    ],
  },
];
