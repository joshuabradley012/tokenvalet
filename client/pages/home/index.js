import React from 'react';
import './style.scss';
import { clone } from 'lib';
import { guests as guestsOriginal } from 'data';
import {
  Dashboard,
  Guests,
  Link,
  Section,
} from 'components';

const guests = clone(guestsOriginal);

const dashboardLinks = [
  'arrival',
  'departure',
  'guests',
  'finder',
];

const Home = () => (
  <Section className="home-section" backButton={false}>
    <h1>Dashboard</h1>
    <Dashboard links={dashboardLinks} />
    <div className="heading-link space-between align-items-center">
      <h2>Guest queue</h2>
      <Link href="/guests">See all</Link>
    </div>
    <Guests data={guests.slice(0, 5)} />
  </Section>
);

export default Home;

