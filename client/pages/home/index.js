import React from 'react';
import './style.scss';
import { routes } from 'routes';
import {
  Icon,
  Link,
} from 'components';

const dashboardLinks = [
  '/arrival',
  '/departure',
  '/guest-list',
  '/finder',
];

const Home = () => (
  <section className="home">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-auto">
          <h1>Dashboard</h1>
          <div className="dashboard row gx-8 gy-8">
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
        </div>
      </div>
    </div>
  </section>
);

export default Home;

