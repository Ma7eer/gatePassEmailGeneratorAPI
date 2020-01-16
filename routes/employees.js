const express = require("express");
const router = express.Router();

const controller = require("../controller/employees");

/**
 * @swagger
 * /employees:
 * get:
 *  description: Use to get all employees
 *  responses:
 *    '200':
 *      description: A successful response
 */
router.get("/", controller.getAllEmployees);

/**
 * @swagger
 * /employees:
 * get:
 *  description: Use to get all employees
 *  responses:
 *    '200':
 *      description: A successful response
 */
router.get("/:id", controller.getAllEmployeesById);

/**
 * @swagger
 * /employees:
 * getOne:
 *  description: Use to get one employee
 *  responses:
 *    '200':
 *      description: A successful response
 */
router.get("/", controller.getEmployee);

/**
 * @swagger
 * /employees:
 * post:
 *  description: Use to post new employee
 *  responses:
 *    '200':
 *      description: A successful response
 */
router.post("/", controller.addNewEmployee);

/**
 * @swagger
 * /companies:
 * put:
 *  description: Use to edit existing employee
 *  responses:
 *    '200':
 *      description: A successful response
 */
router.put("/", controller.editExistingEmployee);

/**
 * @swagger
 * /employees:
 * delete:
 *  description: Use to delete existing employee
 *  responses:
 *    '200':
 *      description: A successful response
 */
router.delete("/", controller.deleteExistingEmployee);

module.exports = router;
