import React from 'react';

const routes = [
  {
    path: '/transaction/create',
    exact: true,
    name: 'New Transaction',
    component: React.lazy(() => import('./views/TransactionCreate')),
  },
];

export default routes;
