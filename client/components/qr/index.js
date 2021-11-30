import React, { useRef, useEffect } from 'react';
import './style.scss';
import QRCode from 'qrcode';

const Qr = ({ id = null }) => {
  let svg = '';

  QRCode.toString(`https://tokenvalet.com/qr?id=${id}`, (error, svgString) => {
    svg = svgString;
  });

  return <div className="qr-wrapper" dangerouslySetInnerHTML={{ __html: svg }} />
};

export default Qr;
