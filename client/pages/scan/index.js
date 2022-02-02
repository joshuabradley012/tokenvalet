import React, { useEffect, useState } from 'react';
import './style.scss';
import { Icon, Section } from 'components';

const Scan = () => {
  const [camera, setCamera] = useState(null);

  useEffect(() => {
    const getMedia = async () => {
      let stream = null;

      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setCamera(stream);
      } catch (err) {
        console.error(err);
      }
    };

    getMedia().catch(console.error);
  }, []);

  return (
    <Section className="scan-section">
      <div className="header space-between align-items-center">
        <h1>Scan</h1>
        <Icon type="search" />
      </div>
      <div className="scanner">
      </div>
    </Section>
  );
};

export default Scan;

