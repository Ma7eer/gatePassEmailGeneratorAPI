const TABLE = "companies";
const COLUMN_ONE = "id";
const COLUMN_TWO = "name";

module.exports = {
  getAllCompanies: `SELECT * FROM ${TABLE}`,
  getCompany: `SELECT * FROM ${TABLE} WHERE ${COLUMN_ONE} = $1`,
  addNewCompany: `INSERT INTO ${TABLE} (${COLUMN_TWO}) VALUES ($1)`,
  editExistingCompany: `UPDATE ${TABLE} SET ${COLUMN_TWO} = $1 WHERE ${COLUMN_ONE} = $2`,
  deleteExistingCompany: `DELETE FROM ${TABLE} WHERE ${COLUMN_ONE} = $1`
};
