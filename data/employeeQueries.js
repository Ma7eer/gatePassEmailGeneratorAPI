// const TABLE = "companies";
// const COLUMN_ONE = "id";
// const COLUMN_TWO = "name";

module.exports = ({
  TABLE,
  COLUMN_ONE,
  COLUMN_TWO,
  COLUMN_THREE,
  COLUMN_FOUR
}) => {
  return {
    getAll: `SELECT * FROM ${TABLE}`,
    getAllById: `SELECT * FROM ${TABLE} WHERE ${COLUMN_FOUR} = $1`,
    getOne: `SELECT * FROM ${TABLE} WHERE ${COLUMN_ONE} = $1`,
    addOne: `INSERT INTO ${TABLE} (${COLUMN_TWO}, ${COLUMN_THREE}, ${COLUMN_FOUR}) VALUES($1, $2, $3)`,
    editOne: `UPDATE ${TABLE} SET ${COLUMN_TWO} = $1 WHERE ${COLUMN_ONE} = $2`,
    deleteOne: `DELETE FROM ${TABLE} WHERE ${COLUMN_ONE} = $1`
  };
};
