import React from 'react';
import './style.scss';
import { routes } from 'routes';
import {
  Icon,
  Link,
} from 'components';

const dashboardLinks = [
  'Arrival',
  'Return',
  'Guest list',
  'Finder',
];

const Home = () => (
  <section className="home">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-auto">
          <h1>Dashboard</h1>
          <div className="dashboard row gx-8 gy-8">
            {dashboardLinks.map(link => {
              const route = routes.find(route => route.name === link);

              if (route) {
                return (
                  <div className="col-6" key={route.path}>
                    <Link className="item" href={route.path}>
                      <Icon type={route.icon} />
                      <span>{route.name}</span>
                    </Link>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Home;

