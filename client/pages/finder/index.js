import React, { useEffect, useState } from 'react';
import './style.scss';
import { guests } from 'data';
import {
  Guests,
} from 'components';

const Finder = () => {
  const [search, setSearch] = useState('');
  const [foundGuests, setFoundGuests] = useState(guests);

  const handleChange = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  useEffect(() => {
    const newFoundGuests = guests.filter(guest => {
      if (
        guest.name.toLowerCase().includes(search)
        || guest.license.toLowerCase().includes(search)
        || guest.car?.color.toLowerCase().includes(search)
        || guest.car?.make.toLowerCase().includes(search)
        || guest.car?.model.toLowerCase().includes(search)
      ) {
        return true;
      } else {
        return false;
      }
    });

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

