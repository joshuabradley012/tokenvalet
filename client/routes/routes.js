import React from 'react';

const routes = [
  {
    path: '/arrival',
    component: 'Arrival',
    icon: 'mapMarker',
    name: 'Arrival',
    inNav: true,
    seo: {
      title: 'Arrival',
      description: 'Arrive and park your car.',
    },
  },
  {
    path: '/components',
    component: 'ComponentLibrary',
    icon: 'components',
    name: 'Components',
    inNav: true,
    seo: {
      title: 'Components',
      description: 'tokenvalet component library.',
    },
  },
  {
    path: '/finder',
    component: 'Finder',
    icon: 'search',
    name: 'Finder',
    inNav: true,
    seo: {
      title: 'Finder',
      description: 'Find any guest, current or past.',
    },
  },
  {
    path: '/guest-list',
    component: 'GuestList',
    icon: 'list',
    name: 'Guest list',
    inNav: true,
    seo: {
      title: 'Guest list',
      description: 'See all of the current guests.',
    },
  },
  {
    path: '/login',
    component: 'Login',
    icon: 'user',
    name: 'Login',
    inNav: true,
    seo: {
      title: 'Login',
      description: 'Login to tokenvalet.',
    },
  },
  {
    path: '/return',
    component: 'Return',
    icon: 'signOut',
    name: 'Return',
    inNav: true,
    seo: {
      title: 'Return',
      description: 'Return your car.',
    },
  },
  {
    path: '/ticket',
    component: 'Ticket',
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
    component: 'Typography',
    icon: 'font',
    name: 'Typography',
    inNav: true,
    seo: {
      title: 'Typography',
      description: 'Lorem ipusm example of text.',
    },
  },
  // "/" must be last
  {
    path: '/',
    component: 'Home',
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
