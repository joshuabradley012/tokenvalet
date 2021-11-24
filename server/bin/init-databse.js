const dropTables = require('../lib/database/drop-tables.js');
const createTables = require('../lib/database/create-tables.js');
const indexTables = require('../lib/database/index-tables.js');

const initDatabase = async () => {
  await dropTables();
  await createTables();
  await indexTables();
}

initDatabase();

