import React from 'react';

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  {
    path: '/downline',
    exact: true,
    name: 'Downline',
    component: React.lazy(() => import('./views/DownlineSummary')),
  },
  {
    path: '/downline/create',
    name: 'Create Downline',
    component: React.lazy(() => import('./views/DownlineCreate')),
  },
  {
    path: '/downline/detail/:headerId',
    name: 'Downline Detail',
    component: React.lazy(() => import('./views/DownlineDetail')),
  },
];

export default routes;
