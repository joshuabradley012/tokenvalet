import { useEffect, useState } from 'react';

// These values must match $grid-breakpoints from scss/variables
const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

const getWindowDimensions = () => {
  const {
    innerWidth: width,
    innerHeight: height,
  } = window;
  return {
    width,
    height,
  };
};

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const { width } = getWindowDimensions();

      let breakpointSize = '';
      for (let size in breakpoints) {
        const breakpointWidth = breakpoints[size];
        if (breakpointWidth > width)
          break;
        breakpointSize = size;
      }

      setBreakpoint(breakpointSize);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoint;
};

export default useBreakpoint;
