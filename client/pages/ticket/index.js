import React from 'react';
import './style.scss';
import { Button, Qr } from 'components';

const Ticket = () => (
  <section className="qr-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-9 col-md-7 col-lg-6 col-xl-5">
          <h1>Valet ticket</h1>
          <p>This ticket is saved, <br className="d-sm-none"/> come back when you need it.</p>
          <Qr id="1234567890" />
          <p>
            <Button href="/pick-up">Pick up car</Button>
            <Button href="/request-item">Request item</Button>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Ticket;

