import React from 'react';
import './style.scss';
import { clone } from 'lib';
import { guests as guestsOriginal } from 'data';
import { routes } from 'routes';
import {
  Icon,
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
    <h1>Departure</h1>
    <div className="dashboard row gx-4 gy-4">
      {dashboardLinks.map(link => {
        const route = routes.find(route => route.path === link);

        if (route) {
          return (
            <div className="col-6" key={route.path}>
              <Link className="item" href={route.path}>
                <div className="inner">
                  <Icon type={route.icon} />
                  <span>{route.name}</span>
                </div>
              </Link>
            </div>
          );
        }
      })}
    </div>
    <div className="heading-link">
      <h2>Guest queue</h2>
      <Link href="/guests">See all</Link>
    </div>
    <Guests guests={guests.slice(0, 5)} />
  </Section>
);

export default Home;

