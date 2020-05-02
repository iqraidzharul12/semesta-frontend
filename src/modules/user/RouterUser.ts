import React from 'react';

const routes = [
  {
    path: '/user',
    exact: true,
    name: 'User',
    component: React.lazy(() => import('./views/UserSummary')),
  },
  {
    path: '/user/create',
    name: 'Create User',
    component: React.lazy(() => import('./views/UserCreate')),
  },
  {
    path: '/user/detail/:headerId',
    name: 'User Detail',
    component: React.lazy(() => import('./views/UserDetail')),
  },
];

export default routes;
