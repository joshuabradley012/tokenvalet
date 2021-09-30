const classNames = function() {
  const classes = Array.from(arguments);
  const className = classes.join(' ').replace(/\s+/, ' ').trim();
  return className;
};

export default classNames;

