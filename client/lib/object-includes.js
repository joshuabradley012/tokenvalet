const objectIncludes = (object, string) => {

  if (!object instanceof Object) return console.error('objectIncludes() requires an Object.');

  for (let key in object) {
    const item = object[key];

    if (item instanceof Object) {
      if (objectIncludes(item, string)) {
        return true;
      }
    }

    if (`${item}`.toLowerCase().includes(string)) {
      return true;
    }
  }

  return false;
};

export default objectIncludes;
