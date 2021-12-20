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
          <div className="guest-list">
            <h2>Guest queue</h2>
            <div className="guest">
              <div className="header">
                <h3>John Doe</h3>
                <span className="date">11/21/2021</span>
              </div>
              <div className="body">
                <span className="vehicle">Red Honda Civic</span>
                <span className="license">6YYM091</span>
              </div>
            </div>
            <div className="guest">
              <div className="header">
                <h3>John Doe</h3>
                <span className="date">11/21/2021</span>
              </div>
              <div className="body">
                <span className="vehicle">Red Honda Civic</span>
                <span className="license">6YYM091</span>
              </div>
            </div>
            <div className="guest">
              <div className="header">
                <h3>John Doe</h3>
                <span className="date">11/21/2021</span>
              </div>
              <div className="body">
                <span className="vehicle">Red Honda Civic</span>
                <span className="license">6YYM091</span>
              </div>
            </div>
            <div className="guest">
              <div className="header">
                <h3>John Doe</h3>
                <span className="date">11/21/2021</span>
              </div>
              <div className="body">
                <span className="vehicle">Red Honda Civic</span>
                <span className="license">6YYM091</span>
              </div>
            </div>
            <div className="guest">
              <div className="header">
                <h3>John Doe</h3>
                <span className="date">11/21/2021</span>
              </div>
              <div className="body">
                <span className="vehicle">Red Honda Civic</span>
                <span className="license">6YYM091</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Home;

