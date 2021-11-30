const clone = object => {
  if (Array.isArray(object)) {
    return object.map(child => clone(child));
  } else if (typeof object === 'object') {
    const copy = {};
    for (let key in object)
      copy[key] = clone(object[key])
    return copy;
  } else {
    return object;
  }
};

export default clone;
