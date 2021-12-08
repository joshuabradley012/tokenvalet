import React from 'react';
import {
  ComponentLibrary,
  Login,
  Ticket,
  Typography,
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
    path: '/typography',
    component: <Typography />,
    icon: 'font',
    name: 'Typography',
    inNav: true,
    seo: {
      title: 'Typography',
      description: 'Lorem ipusm example of text.',
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
  {
    path: '/login',
    component: <Login />,
    icon: 'user',
    name: 'Login',
    inNav: true,
    seo: {
      title: 'Login',
      description: 'Login to tokenvalet.',
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
