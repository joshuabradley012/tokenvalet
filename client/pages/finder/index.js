import React from 'react';
import './style.scss';
import { guests } from 'data';
import {
  GuestList,
} from 'components';

const Finder = () => (
  <section className="finder-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-content">
          <h1>Finder</h1>
          <input type="text" placeholder="Search for guests" />
          <GuestList guests={guests} />
        </div>
      </div>
    </div>
  </section>
);

export default Finder;

