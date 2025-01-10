import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

const mainRoutes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/modules/home/pages/MainPage.vue'),
    meta: {
      public: true,
    }
  },
];

let devRoutes: Readonly<RouteRecordRaw[]> = [];

if (import.meta.env.VITE_APP_MODE === 'development') {
  devRoutes = [
    {
      path: '/dev',
      name: 'dev',
      component: () => import('@/pages/DevPage.vue'),
    },
  ];
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...mainRoutes,
    ...devRoutes,
  ],
});

export default router;
