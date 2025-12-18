const express = require("express");
const router = express.Router();

const {
    getAllTrainers,
    getTrainerById,
    createTrainer,
    updateTrainer,
    deleteTrainer
} = require("../controllers/trainerController");

router.get("/trainers", getAllTrainers);

router.get("/trainers/:id", getTrainerById);

router.post("/trainers", createTrainer);

router.put("/trainers/:id", updateTrainer);

router.delete("/trainers/:id", deleteTrainer);

module.exports = router;
