require('../../env.js');
const path = require('path');
const { Pool } = require('pg');

module.exports = class Database {
  constructor() {
    this.pool = new Pool();
  }

  async query(sql, args) {
    try {
      const result = await this.pool.query({
        text: sql,
        values: args
      });
      return result.rows;
    } catch (e) {
      console.error(e.message);
    }
  }

  async close() {
    try {
      await this.pool.end();
    } catch (e) {
      console.error(e.message);
    }
  }
};
