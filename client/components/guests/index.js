import React from 'react';
import './style.scss';
import {
  Link,
} from 'components';

const Guests = ({ guests }) => (
  <div className="guests link-list">
    {guests.map(guest => (
      <Link className="guest link" href={`/guests/${guest.id}`} key={guest.id}>
        <div className="space-between">
          <h3 className="name link-text">{guest.name}</h3>
          <span className="last-visit link-text">{guest.lastVisit}</span>
        </div>
        <div className="space-between">
          <span className="vehicle link-text">{guest.car?.color} {guest.car?.make} {guest.car?.model}</span>
          <span className="license link-text">{guest.license}</span>
        </div>
      </Link>
    ))}
  </div>
);

export default Guests;
