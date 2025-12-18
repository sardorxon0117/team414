const express = require("express");
const router = express.Router();

const {getAllTariff} = require("../controllers/tariffController");

router.get("/tariffs", getAllTariff);

module.exports = router;