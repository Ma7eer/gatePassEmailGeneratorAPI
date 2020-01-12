module.exports = {
  getAllCompanies: "SELECT * FROM companies",
  addNewCompany: "INSERT INTO companies (name) VALUES ($1)",
  editExistingCompany: "UPDATE companies SET name = $1 WHERE id = $2"
};
