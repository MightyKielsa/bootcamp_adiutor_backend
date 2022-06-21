import pool from "../index.js";

async function deleteTable(tableName) {
  await pool.query(`DROP $1`, [tableName]);
  console.log(`table ${tableName} deleted`);
}

async function deleteAllTables() {
  await pool.query(`DROP`);
}
