const { Pool } = require('pg');

//MODIFICAR DATOS PARA CONEXION DE DB
const config = {
   user: process.env.PGUSER,
   host: process.env.PGHOST,
   database: process.env.PGDATABASE,
   password: process.env.PGPASSWORD,
   port: process.env.PGPORT,
   max: process.env.PGMAXDB,
   min: process.env.PGMINDB,
   idleTimeoutMillis: process.env.PGTIMEOUTDB,
   connectionTimeoutMillis: process.env.PGCONNTIMEOUTDB,
    ssl: false
};

/* if (process.env.PGSSL == "true") {
   config["ssl"] = {
      rejectUnauthorized: false
   }
} */

class CustomPool {
   constructor() {
      if (!CustomPool.instance) {
         CustomPool.instance = this;
      }
      return CustomPool.instance;
   }
   getPoolInstance() {
      if (!CustomPool.poolInstance) {
         CustomPool.poolInstance = new Pool(config);
      }
      return CustomPool.poolInstance;
   }
}
const instance = new CustomPool();
Object.freeze(instance);
module.exports = instance;