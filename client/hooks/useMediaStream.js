import { useEffect, useState } from 'react';

const useMediaStream = constraints => {
  const [mediaStream, setMediaStream] = useState(null);

  useEffect(() => {
    const getMedia = async () => {
      let stream = null;

      try {
        stream = await navigator.mediaDevices.getUserMedia(constraints);
        setMediaStream(stream);
      } catch (err) {
        console.error(err);
      }
    };

    if (!mediaStream) {
      getMedia().catch(console.error);
    } else {
      return () => {
        mediaStream.getTracks().forEach(track => track.stop());
      }
    }
  }, [mediaStream, constraints]);

  return mediaStream;
};

export default useMediaStream;

