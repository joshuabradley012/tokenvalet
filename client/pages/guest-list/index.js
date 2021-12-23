import React from 'react';
import './style.scss';
import { guests } from 'data';
import {
  Guests,
} from 'components';

const GuestList = () => (
  <section className="guest-list-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-content">
          <h1>Guest list</h1>
          <Guests guests={guests} />
        </div>
      </div>
    </div>
  </section>
);

export default GuestList;

