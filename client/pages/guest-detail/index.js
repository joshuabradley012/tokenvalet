import React from 'react';
import { useParams } from 'react-router-dom';
import './style.scss';
import { guests, visits } from 'data';
import { Visits } from 'components';

const GuestDetail = () => {
  const { guestId } = useParams();
  const guest = guests.find(guest => guest.id === guestId);

  return (
    <section className="guest-detail-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-content">
            <div className="guest-detail">
              <div className="header space-between">
                <h1 className="name">{guest.name}</h1>
                <div className="status">
                  <span className="text">Inactive</span>
                  <span className="indicator inactive"></span>
                </div>
              </div>
              <p className="license">License: {guest.license}</p>
              <p className="vehicle">Vehicle: {guest.car?.color} {guest.car?.make} {guest.car?.model}</p>
              <p className="last-visit">Last visit: {guest.lastVisit}</p>
            </div>
            <h2>Visits</h2>
            <Visits visits={visits} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestDetail;

