import React, { useEffect, useState } from 'react';
import './style.scss';
import { objectIncludes } from 'lib';
import { guests } from 'data';
import { Guests } from 'components';

const Finder = () => {
  const [search, setSearch] = useState('');
  const [foundGuests, setFoundGuests] = useState(guests);

  const handleChange = event => {
    setSearch(event.target.value.toLowerCase());
  };

  useEffect(() => {
    const newFoundGuests = guests.filter(guest => objectIncludes(guest, search));
    setFoundGuests(newFoundGuests);
  }, [search]);

  return (
    <section className="finder-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-content">
            <h1>Finder</h1>
            <input
              type="text"
              placeholder="Search for guests"
              value={search}
              onChange={handleChange}
            />
            <Guests guests={foundGuests} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Finder;

