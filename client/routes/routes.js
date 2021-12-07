import React from 'react';
import {
  ComponentLibrary,
  Ticket,
} from 'pages';

const routes = [
  {
    path: '/ticket',
    component: <Ticket />,
    icon: 'qr',
    name: 'Ticket',
    inNav: true,
    seo: {
      title: 'Ticket',
      description: 'Your valet ticket.',
    },
  },
  {
    path: '/components',
    component: <ComponentLibrary />,
    icon: 'components',
    name: 'Components',
    inNav: true,
    seo: {
      title: 'Components',
      description: 'tokenvalet component library.',
    },
  },
  // "/" must be last
  {
    path: '/',
    component: <Ticket />,
    icon: 'home',
    name: 'Home',
    inNav: true,
    seo: {
      title: 'tokenvalet',
      description: 'Welcome to tokenvalet.',
    },
  },
];

export default routes;
