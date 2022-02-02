import React, { useEffect, useRef, useState } from 'react';
import './style.scss';
import { useMediaStream } from 'hooks';
import { Icon, Section } from 'components';

const Scan = () => {
  const videoRef = useRef(null);

  const mediaStream = useMediaStream({
    audio: false,
    video: {
      facingMode: 'environment',
    },
  });

  if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = mediaStream;
  }

  const handleCanPlay = () => videoRef.current.play();

  return (
    <Section className="scan-section">
      <h1>Scan</h1>
      <div className="scanner">
        <video className="video" ref={videoRef} onCanPlay={handleCanPlay} autoPlay playsInline muted />
        <div className="indicator-top-left" />
        <div className="indicator-top-right" />
        <div className="indicator-bottom-left" />
        <div className="indicator-bottom-right" />
        <div className="indicator-center" />
      </div>
    </Section>
  );
};

export default Scan;

