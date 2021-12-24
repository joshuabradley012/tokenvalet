const objectIncludes = (object, string, excludeKeys = []) => {

  if (!object instanceof Object) return console.error('objectIncludes() requires an Object.');

  for (let key in object) {
    if (excludeKeys.includes(key)) continue;

    const item = object[key];

    if (item instanceof Object) {
      if (objectIncludes(item, string, excludeKeys)) {
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
