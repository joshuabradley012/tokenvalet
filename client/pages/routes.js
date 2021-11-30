import React from 'react';
import Ticket from 'pages/ticket';
import ComponentLibrary from 'pages/component-library';

const routes = [
  {
    icon: 'qr',
    name: 'Ticket',
    path: '/ticket',
    component: <Ticket />,
  },
  {
    icon: 'components',
    name: 'Components',
    path: '/components',
    component: <ComponentLibrary />,
  },
  {
    icon: 'home',
    name: 'Home',
    path: '/',
    component: <Ticket />,
  },
];

export default routes;
