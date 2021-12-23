import React from 'react';
import './style.scss';
import {
  Link,
} from 'components';

const GuestList = ({ guests }) => (
  <div className="guest-list">
    {/* TODO: replace random with real UID */}
    {guests.map(guest => (
      <Link className="guest" href={`/guests/${guest.license}`} key={Math.random()}>
        <div className="header">
          <h3 className="name">{guest.name}</h3>
          <span className="date">{guest.date}</span>
        </div>
        <div className="body">
          <span className="vehicle">{guest.car?.color} {guest.car?.make} {guest.car?.model}</span>
          <span className="license">{guest.license}</span>
        </div>
      </Link>
    ))}
  </div>
);

export default GuestList;
