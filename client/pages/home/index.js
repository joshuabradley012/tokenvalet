import React from 'react';
import './style.scss';
import { clone } from 'lib';
import { guests as guestsOriginal } from 'data';
import { routes } from 'routes';
import {
  Icon,
  GuestList,
  Link,
} from 'components';

const guests = clone(guestsOriginal);

const dashboardLinks = [
  'arrival',
  'departure',
  'guests',
  'finder',
];

const Home = () => (
  <section className="home-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-content">
          <h1>Dashboard</h1>
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
          <GuestList guests={guests.slice(0, 5)} />
        </div>
      </div>
    </div>
  </section>
);

export default Home;

