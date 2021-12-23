import React from 'react';
import { useParams } from 'react-router-dom';
import './style.scss';
import { guests } from 'data';

const GuestDetail = () => {
  const { guestId } = useParams();
  const guest = guests.find(guest => guest.license === guestId);

  return (
    <section className="guest-detail-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-content">
            <div className="guest-detail">
              <div className="header">
                <h1 className="name">{guest.name}</h1>
                <div className="status">
                  <span className="text">Inactive</span>
                  <span className="indicator inactive"></span>
                </div>
              </div>
              <p className="license">License: {guest.license}</p>
              <p className="vehicle">Vehicle: {guest.car?.color} {guest.car?.make} {guest.car?.model}</p>
              <p className="last-visit">Last visit: {guest.date}</p>
            </div>
            <h2>Visits</h2>
            <div className="visits">
              <div className="visit">
                <div className="header">
                  <h3 className="name">Fish House</h3>
                  <div className="date">11/21/2021</div>
                </div>
              </div>
              <div className="visit">
                <div className="header">
                  <h3 className="name">Fish House</h3>
                  <div className="date">11/21/2021</div>
                </div>
              </div>
              <div className="visit">
                <div className="header">
                  <h3 className="name">Fish House</h3>
                  <div className="date">11/21/2021</div>
                </div>
              </div>
              <div className="visit">
                <div className="header">
                  <h3 className="name">Fish House</h3>
                  <div className="date">11/21/2021</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestDetail;

