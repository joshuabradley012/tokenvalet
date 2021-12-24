const clone = object => {

  if (Array.isArray(object)) {
    return object.map(child => clone(child));

  } else if (object instanceof Map) {
    const copy = new Map();
    object.forEach((value, key) => copy.set(clone(key), clone(value)));
    return copy;

  } else if (object instanceof Set) {
    const copy = new Set();
    object.forEach((value, key) => copy.add(clone(key), clone(value)));
    return copy;

  } else if (object instanceof Date) {
    return new Date(object);

  } else if (object instanceof RegExp) {
    return new RegExp(object);

  } else if (object instanceof Function) {
    return object.bind({});

  } else if (typeof object === 'object') {
    const copy = {};
    for (let key in object) copy[key] = clone(object[key]);
    return copy;
  }

  return object;
};

export default clone;

