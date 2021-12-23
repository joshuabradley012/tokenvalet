import React from 'react';
import './style.scss';
import { Button, Qr } from 'components';

const Ticket = () => (
  <section className="ticket-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-auto">
          <h1>Valet ticket</h1>
          <p>This ticket is saved, <br className="d-sm-none"/> return to this page at any time.</p>
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

