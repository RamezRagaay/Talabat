const router = require("express").Router();
const customerController = require("../controller/customerController");
const { createCustomer, loginCustomer } = require("../validators/customer");


router.post("/signup", createCustomer, customerController.signup);
router.post("/login", loginCustomer, customerController.login);


module.exports = router