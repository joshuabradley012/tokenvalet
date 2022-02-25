import { useEffect, useState } from 'react';

const useMediaStream = constraints => {
  const [mediaStream, setMediaStream] = useState(null);

  useEffect(() => {
    let streamRef = null;

    const getMedia = async () => {
      try {
        streamRef = await navigator.mediaDevices.getUserMedia(constraints);
        setMediaStream(streamRef);
      } catch (err) {
        console.error(err);
      }
    };

    if (!mediaStream) {
      getMedia().catch(console.error);
    }

    return function cleanup() {
      streamRef.getTracks().forEach(track => track.stop());
    }
  }, []);

  return mediaStream;
};

export default useMediaStream;

