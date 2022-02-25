import React, { useEffect, useRef, useState } from 'react';
import jsQr from 'jsqr';
import './style.scss';
import { useMediaStream } from 'hooks';

const defaultOnScan = data => console.log(data);

const Scanner = ({ onScan = defaultOnScan }) => {
  const resolution = 600;
  const delay = 500;
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  let timer = null;

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

  const scanQr = () => {
    // Crop image to fit 1:1 aspect ratio
    let width = videoRef.current.videoWidth;
    let height = videoRef.current.videoHeight;

    let hOffset = 0;
    let vOffset = 0;

    const smallest = Math.min(width, height);
    const ratio = resolution / smallest

    height = ratio * height;
    width = ratio * width;

    hOffset = (width - resolution) / 2 * -1
    vOffset = (height - resolution) / 2 * -1

    canvasRef.current.width = resolution;
    canvasRef.current.height = resolution;

    // Draw video to canvas to get image data
    const ctx = canvasRef.current.getContext('2d');

    ctx.drawImage(videoRef.current, hOffset, vOffset, width, height);

    const imageData = ctx.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height);

    const decoded = jsQr(
      imageData.data,
      imageData.width,
      imageData.height,
    );

    if (decoded?.data) {
      onScan(decoded.data);
    } else {
      timer = setTimeout(scanQr, delay);
    }
  };

  useEffect(() => {
    timer = setTimeout(scanQr, delay);

    return function cleanup() {
      clearTimeout(timer);
    }
  }, []);

  return (
    <div className="scanner">
      <video className="video" ref={videoRef} onCanPlay={handleCanPlay} autoPlay playsInline muted />
      <canvas className="canvas" ref={canvasRef} />
      <div className="indicator-top-left" />
      <div className="indicator-top-right" />
      <div className="indicator-bottom-left" />
      <div className="indicator-bottom-right" />
      <div className="indicator-center" />
    </div>
  );
};

export default Scanner;

