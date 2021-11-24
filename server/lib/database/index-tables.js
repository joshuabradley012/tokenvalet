const Database = require('./Database.js');

const indexTables = async () => {
  const db = new Database();

  await db.close();
}

module.exports = indexTables;
