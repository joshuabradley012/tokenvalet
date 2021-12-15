import React from 'react';
import './style.scss';

const Finder = () => (
  <section>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-auto">
          <h1>Finder</h1>
          <input type="text" placeholder="Search for guests" />
          <div className="search-results">
            <div className="search-result">
              <div className="header">
                <h3>John Doe</h3>
                <span className="date">11/21/2021</span>
              </div>
              <div className="body">
                <span className="vehicle">Red Honda Civic</span>
                <span className="license">6YYM091</span>
              </div>
            </div>
            <div className="search-result">
              <div className="header">
                <h3>John Doe</h3>
                <span className="date">11/21/2021</span>
              </div>
              <div className="body">
                <span className="vehicle">Red Honda Civic</span>
                <span className="license">6YYM091</span>
              </div>
            </div>
            <div className="search-result">
              <div className="header">
                <h3>John Doe</h3>
                <span className="date">11/21/2021</span>
              </div>
              <div className="body">
                <span className="vehicle">Red Honda Civic</span>
                <span className="license">6YYM091</span>
              </div>
            </div>
            <div className="search-result">
              <div className="header">
                <h3>John Doe</h3>
                <span className="date">11/21/2021</span>
              </div>
              <div className="body">
                <span className="vehicle">Red Honda Civic</span>
                <span className="license">6YYM091</span>
              </div>
            </div>
            <div className="search-result">
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

export default Finder;

