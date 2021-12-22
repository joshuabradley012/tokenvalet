import React from 'react';
import { useParams } from 'react-router-dom';
import './style.scss';
import { guests } from 'data';

const GuestDetail = () => {
  const { guestId } = useParams();
  const guest = guests.find(guest => guest.license === guestId);

  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto">
            <div className="guest-detail">
              <div className="header">
                <span className="profile"></span>
                <h1>{guest.name}</h1>
              </div>
              <span>{guest.license}</span>
              <span>{guest.car?.color} {guest.car?.make} {guest.car?.model}</span>
              <p>Last visit: {guest.date}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestDetail;

