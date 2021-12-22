import React from 'react';
import './style.scss';
import { guests } from 'data';
import {
  GuestList as GuestListComponent,
} from 'components';

const GuestList = () => (
  <section>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-auto">
          <h1>Guest list</h1>
          <GuestListComponent guests={guests} />
        </div>
      </div>
    </div>
  </section>
);

export default GuestList;

