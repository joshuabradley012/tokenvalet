import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';
import { Icon, Scanner, Section } from 'components';

const Scan = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleScan = data => {
    const regex = new RegExp('^(?:https?:)?//(?:www\.)?tokenvalet\.com/guests/(\\d+)', 'i');
    const match = data.match(regex);
    if (match && match[1]) {
      const userId = match[1];
      navigate(`/guests/${userId}`);
    } else {
      setError(`Invalid URL scanned: ${data}`);
    }
  };

  return (
    <Section className="scan-section">
      <h1>Scan</h1>
      <Scanner onScan={handleScan} />
      {error ? <p className="error">{error}</p> : null}
    </Section>
  );
};

export default Scan;

