import type { RouteConfig } from 'vue-router';

export const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('@/views/MapView.vue'),
    children: [
      {
        path: '/map/:id',
        name: 'marker',
      },
    ],
  },
];
