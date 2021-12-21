import React from 'react';
import { useParams } from 'react-router-dom';
import './style.scss';

const GuestDetail = () => {
  const params = useParams();

  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto">
            <h1>Guest: {params.guestId}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestDetail;

