const getDimensions = (element = window) => {
  const {
    innerWidth: width,
    innerHeight: height,
  } = element;

  return {
    width,
    height,
  };
};

export default getDimensions;
