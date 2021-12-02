import { useMatch, useResolvedPath } from 'react-router-dom';

const useActivePath = path => {;
  const resolved = useResolvedPath(path);
  const match = useMatch({ path: resolved.pathname, end: true });
  return match;
};

export default useActivePath;
