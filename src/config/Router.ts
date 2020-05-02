import React from 'react';

import RouterDashboard from '../modules/dashboard/RouterDashboard';
import RouterUser from '../modules/user/RouterUser';
import RouterDownline from '../modules/downline/RouterDownline';
import RouterMap from '../modules/map/RouterMap';
import RouterTransaction from '../modules/transaction/RouterTransaction';

export const RouterContainer = [
  ...RouterDashboard,
  ...RouterUser,
  ...RouterDownline,
  ...RouterMap,
];

export const RouterNonContainer = [
  {
    path: '/login',
    exact: true,
    name: 'Login',
    component: React.lazy(() => import('../modules/auth/views/SignIn')),
  },
  // {
  //   path: '/register',
  //   exact: true,
  //   name: 'Register',
  //   component: React.lazy(() => import('../modules/auth/views/SignUp')),
  // },
  {
    path: '/activate',
    exact: true,
    name: 'Activate',
    component: React.lazy(() => import('../modules/auth/views/Activate')),
  },
  {
    path: '/404',
    exact: true,
    name: '404 Not Found',
    component: React.lazy(() => import('../modules/pages/views/Page404')),
  },
  {
    path: '/500',
    exact: true,
    name: '500 Internal Server Error',
    component: React.lazy(() => import('../modules/pages/views/Page500')),
  },
  ...RouterTransaction,
];
