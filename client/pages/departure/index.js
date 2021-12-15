import React from 'react';
import './style.scss';

const Departure = () => (
  <section>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-auto">
          <h1>Departure</h1>
          <p>Help your guest check out.</p>
          <form>
            <h2>Guest finder</h2>
            <label>Search</label>
            <input type="text" />
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Departure;

