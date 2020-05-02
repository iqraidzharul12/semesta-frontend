import React from 'react';

const routes = [
  {
    path: '/map',
    exact: true,
    name: 'Relation Map',
    component: React.lazy(() => import('./views/MapSummary')),
  },
];

export default routes;
