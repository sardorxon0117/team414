const express = require("express");
const router = express.Router();

const {getAllTrainers} = require("../controllers/trainerController");

router.get("/trainers", getAllTrainers);

module.exports = router;
