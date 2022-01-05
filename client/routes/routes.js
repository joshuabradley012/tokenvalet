import React from 'react';

const routes = [
  {
    path: '',
    element: 'Home',
    icon: 'home',
    name: 'Home',
    inNav: true,
    seo: {
      title: 'tokenvalet',
      description: 'Welcome to tokenvalet.',
    },
  },
  {
    path: 'about',
    element: 'About',
    icon: 'font',
    name: 'About',
    inNav: true,
    seo: {
      title: 'About',
      description: 'About tokenvalet.',
    },
  },
  {
    path: 'arrival',
    element: 'Arrival',
    icon: 'map-marker',
    name: 'Arrival',
    inNav: true,
    seo: {
      title: 'Arrival',
      description: 'Arrive and park your car.',
    },
  },
  {
    path: 'components',
    element: 'ComponentLibrary',
    icon: 'components',
    name: 'Components',
    inNav: false,
    seo: {
      title: 'Components',
      description: 'tokenvalet component library.',
    },
  },
  {
    path: 'departure',
    element: 'Departure',
    icon: 'sign-out',
    name: 'Departure',
    inNav: true,
    seo: {
      title: 'Departure',
      description: 'Depart from your visit.',
    },
  },
  {
    path: 'finder',
    element: 'Finder',
    icon: 'search',
    name: 'Finder',
    inNav: true,
    seo: {
      title: 'Finder',
      description: 'Find any guest, current or past.',
    },
  },
  {
    path: 'guests',
    element: 'GuestList',
    icon: 'list',
    name: 'Guest list',
    inNav: true,
    seo: {
      title: 'Guest list',
      description: 'See all of the current guests.',
    },
    children: [
      {
        path: ':guestId',
        element: 'GuestDetail',
      },
    ],
  },
  {
    path: 'login',
    element: 'Login',
    icon: 'user',
    name: 'Login',
    inNav: true,
    seo: {
      title: 'Login',
      description: 'Login to tokenvalet.',
    },
  },
  {
    path: 'ticket',
    element: 'Ticket',
    icon: 'qr',
    name: 'Ticket',
    inNav: true,
    seo: {
      title: 'Ticket',
      description: 'Your valet ticket.',
    },
  },
  {
    path: 'typography',
    element: 'Typography',
    icon: 'font',
    name: 'Typography',
    inNav: false,
    seo: {
      title: 'Typography',
      description: 'Lorem ipusm example of text.',
    },
  },
  {
    path: 'visits',
    element: 'VisitList',
    icon: 'calendar',
    name: 'Visits',
    inNav: true,
    seo: {
      title: 'Visits',
      description: 'See all visits.',
    },
    children: [
      {
        path: ':visitId',
        element: 'VisitDetail',
      },
    ],
  },
];

export default routes;
