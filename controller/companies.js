const client = require("../db/config");
const query = require("../data/queries");

const getCompanies = async (req, res) => {
  try {
    await client.query(query.getAllCompanies, (err, results) => {
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
      query.addNewCompany,
      [req.body.companyName],
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
      query.editExistingCompany,
      [req.body.companyName],
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

module.exports = {
  getCompanies,
  addNewCompany,
  editExistingCompany
};
