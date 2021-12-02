import { useBreakpoint } from 'hooks';

const mobileSizes = [
  'xs',
  'sm',
];

const useMobile = () => {
  const breakpoint = useBreakpoint();
  const isMobile = mobileSizes.includes(breakpoint);
  return isMobile;
};

export default useMobile;
