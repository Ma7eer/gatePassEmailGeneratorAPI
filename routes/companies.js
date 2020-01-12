const express = require("express");
const router = express.Router();

const controller = require("../controller/companies");

/**
 * @swagger
 * /companies:
 * get:
 *  description: Use to get all customers
 *  responses:
 *    '200':
 *      description: A successful response
 */
router.get("/", controller.getCompanies);

/**
 * @swagger
 * /companies:
 * getOne:
 *  description: Use to get one customer
 *  responses:
 *    '200':
 *      description: A successful response
 */
router.get("/", controller.getCompany);

/**
 * @swagger
 * /companies:
 * post:
 *  description: Use to post new customer
 *  responses:
 *    '200':
 *      description: A successful response
 */
router.post("/", controller.addNewCompany);

/**
 * @swagger
 * /companies:
 * put:
 *  description: Use to edit existing customer
 *  responses:
 *    '200':
 *      description: A successful response
 */
router.put("/", controller.editExistingCompany);

/**
 * @swagger
 * /companies:
 * delete:
 *  description: Use to delete existing customer
 *  responses:
 *    '200':
 *      description: A successful response
 */
router.delete("/", controller.deleteExistingCompany);

module.exports = router;
