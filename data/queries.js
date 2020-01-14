// const TABLE = "companies";
// const COLUMN_ONE = "id";
// const COLUMN_TWO = "name";

module.exports = ({ TABLE, COLUMN_ONE, COLUMN_TWO }) => {
  return {
    getAll: `SELECT * FROM ${TABLE}`,
    getOne: `SELECT * FROM ${TABLE} WHERE ${COLUMN_ONE} = $1`,
    addOne: `INSERT INTO ${TABLE} (${COLUMN_TWO}) VALUES ($1)`,
    editOne: `UPDATE ${TABLE} SET ${COLUMN_TWO} = $1 WHERE ${COLUMN_ONE} = $2`,
    deleteOne: `DELETE FROM ${TABLE} WHERE ${COLUMN_ONE} = $1`
  };
};
