const client = require("../db/config");
const query = require("../data/employeeQueries");

let data = {
  TABLE: "employees",
  COLUMN_ONE: "employee_id",
  COLUMN_TWO: "employee_name",
  COLUMN_THREE: "employee_civilId",
  COLUMN_FOUR: "company_id"
};

const getAllEmployees = async (req, res) => {
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

const getAllEmployeesById = async (req, res) => {
  try {
    await client.query(
      query(data).getAllById,
      req.params.id,
      (err, results) => {
        if (err) {
          res.status(502).json({ message: "Error running sql query" });
        }
        res.status(200).json(results.rows);
      }
    );
  } catch (err) {
    console.log(err);
  }
};

const getEmployee = async (req, res) => {
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

const addNewEmployee = async (req, res) => {
  try {
    client.query(
      query(data).addOne,
      [req.body.employee_name, req.body.employee_civilId, req.body.company_id],
      (err, results) => {
        if (err) {
          console.log(err);
          res.status(502).json({ message: "Error running sql query" });
        }
        res.status(201).json({ message: "New resource created" });
      }
    );
  } catch (err) {
    console.log(err);
  }
};

const editExistingEmployee = async (req, res) => {
  try {
    await client.query(
      query(data).editOne,
      [req.body.companyName, req.body.id],
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

const deleteExistingEmployee = async (req, res) => {
  try {
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
  getAllEmployees,
  getAllEmployeesById,
  getEmployee,
  addNewEmployee,
  editExistingEmployee,
  deleteExistingEmployee
};
