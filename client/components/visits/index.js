import React from 'react';
import './style.scss';
import {
  Link,
} from 'components';

const Visits = ({ visits }) => (
  <div className="visits link-list">
    {visits.map(visit => (
      <Link className="visit link" href={`/visits/${visit.id}`} key={visit.id}>
        <div className="link-row">
          <h3 className="name link-text">{visit.name}</h3>
          <span className="date link-text">{visit.date}</span>
        </div>
      </Link>
    ))}
  </div>
);

export default Visits;
