import { useState } from 'react';
import { useDimensions } from 'hooks';

// These values must match $grid-breakpoints from scss/variables
const defaultBreakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

const useBreakpoint = (breakpoints = defaultBreakpoints) => {
  const { width } = useDimensions(window);

  let breakpoint = '';
  for (let size in breakpoints) {
    const breakpointWidth = breakpoints[size];
    if (breakpointWidth > width)
      break;
    breakpoint = size;
  }

  return breakpoint;
};

export default useBreakpoint;
