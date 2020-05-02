import React from 'react';

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  {
    path: '/',
    exact: true,
    name: 'Home',
  },
  {
    path: '/dashboard',
    exact: true,
    name: 'Dashboard',
    component: React.lazy(() => import('./views/Home')),
  },
];

export default routes;
