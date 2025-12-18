const express = require("express");
const router = express.Router();
const {getAllCustomers, getCustomer,deleteCustomer} = require("../controllers/customerController");

router.get("/customer", getAllCustomers);
router.get("/customer/:id", getCustomer)
router.delete("/customer/:id",deleteCustomer)

module.exports = router;