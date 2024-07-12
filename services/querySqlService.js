const pool = require("../db/bd-instance").getPoolInstance();


const querySqlService = {
  get: async (query, values = []) => {
    const result = await pool.query(query, values);
    return result.rows;
  },
  insert: async (table, data) => {
    //, returning = '*'
    const index = Object.keys(data).map((key, index) => {
      index += 1;
      return `$${index}`;
    });
    const query = `INSERT INTO ${table} (${Object.keys(
      data
    ).join()}) values (${index.join()}) ON CONFLICT (id) DO NOTHING;;`;
    await pool.query(query, Object.values(data));
  },
  update: async (table, data, condition = "") => {
    const query = `UPDATE ${table} SET ${data} WHERE ${condition};`;
    const result = await pool.query(query);
    return result.rows;
  },
  delete: async (table, condition = "") => {
    const query = `DELETE FROM ${table} WHERE ${condition};`;
    const result = await pool.query(query);
    return result.rows;
  },
};

module.exports = {
  querySqlService
}