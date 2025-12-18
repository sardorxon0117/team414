const express = require("express");
const router = express.Router();

const {
    getAllTariff,
    createTariff,
    deleteTariff,
    updateTariff,
    getTariffById
} = require("../controllers/tariffController");

router.get("/tariffs", getAllTariff);


router.post("/tariffs", createTariff);
router.delete("/tariffs/:id", deleteTariff);
router.put("/tariffs/:id", updateTariff);
router.get("/tariffs/:id", getTariffById);
module.exports = router;