const express = require("express");
const router = express.Router();

const {getAllTariffs} = require("../controllers/tariffController");

router.get("/tariff", getAllTariffs);

module.exports = router;
