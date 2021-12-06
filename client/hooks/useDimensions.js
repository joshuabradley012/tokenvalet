import { useState } from 'react';
import { getDimensions } from 'lib';
import { useResize } from 'hooks';

const useDimensions = (element = window) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useResize(() => {
    const {
      width: elementWidth,
      height: elementHeight
    } = getDimensions(element);

    setWidth(elementWidth);
    setHeight(elementHeight);
  });

  return {
    width,
    height,
  };
};

export default useDimensions;
