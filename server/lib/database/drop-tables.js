const Database = require('./Database.js');

const dropTables = async () => {
  const db = new Database();

  await db.query(`DROP TABLE IF EXISTS users cascade;`);
  await db.query(`DROP TABLE IF EXISTS visitors cascade;`);
  await db.query(`DROP TABLE IF EXISTS locations cascade;`);
  await db.query(`DROP TABLE IF EXISTS parking_spots cascade;`);
  await db.query(`DROP TABLE IF EXISTS licenses cascade;`);
  await db.query(`DROP TABLE IF EXISTS vehicles cascade;`);
  await db.query(`DROP TABLE IF EXISTS visits cascade;`);
  await db.query(`DROP TABLE IF EXISTS payments cascade;`);
  await db.query(`DROP TABLE IF EXISTS damages cascade;`);

  await db.close();
}

module.exports = dropTables;
