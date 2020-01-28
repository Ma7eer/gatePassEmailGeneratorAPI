const client = require("../db/config");
const query = require("../data/companyQueries");

let data = {
  TABLE: "companies",
  COLUMN_ONE: "company_id",
  COLUMN_TWO: "company_name"
};

const getCompanies = async (req, res) => {
  try {
    await client.query(query(data).getAll, (err, results) => {
      if (err) {
        res.status(502).json({ message: "Error running sql query" });
      }
      res.status(200).json(results.rows);
    });
  } catch (err) {
    console.log(err);
  }
};

const getCompany = async (req, res) => {
  try {
    await client.query(query(data).getOne, [req.body.id], (err, results) => {
      if (err) {
        res.status(502).json({ message: "Error running sql query" });
      }
      res.status(200).json(results.rows);
    });
  } catch (err) {
    console.log(err);
  }
};

const addNewCompany = async (req, res) => {
  try {
    client.query(
      query(data).addOne,
      [req.body.company_name],
      (err, results) => {
        if (err) {
          res.status(502).json({ message: "Error running sql query" });
        }
        res.status(201).json({ message: "New resource created" });
      }
    );
  } catch (err) {
    console.log(err);
  }
};

const editExistingCompany = async (req, res) => {
  try {
    await client.query(
      query(data).editOne,
      [req.body.company_name, req.body.id],
      (err, results) => {
        if (err) {
          res.status(502).json({ message: "Error running sql query" });
        }
        res.status(200).json({ message: "New resource updated" });
      }
    );
  } catch (err) {
    console.log(err);
  }
};

const deleteExistingCompany = async (req, res) => {
  try {
    console.log(req.body);
    await client.query(query(data).deleteOne, [req.body.id], (err, results) => {
      if (err) {
        res.status(502).json({ message: "Error running sql query" });
      }
      res.status(200).json({ message: "Resource deleted" });
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getCompanies,
  getCompany,
  addNewCompany,
  editExistingCompany,
  deleteExistingCompany
};
