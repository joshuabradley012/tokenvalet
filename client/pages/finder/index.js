import React from 'react';
import './style.scss';
import { guests } from 'data';
import {
  GuestList,
} from 'components';

const Finder = () => (
  <section>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-auto">
          <h1>Finder</h1>
          <input type="text" placeholder="Search for guests" />
          <GuestList guests={guests} />
        </div>
      </div>
    </div>
  </section>
);

export default Finder;
