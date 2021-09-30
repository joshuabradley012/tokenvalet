const classNames = function() {
  const args = Array.from(arguments);
  const classes = [];
  for (const arg of args) {
    if (typeof arg === 'string') {
      const parts = arg.split(' ');
      for (const part of parts) {
        classes.push(part);
      }
    }
  }
  return classes.join(' ');
};

export default classNames;

