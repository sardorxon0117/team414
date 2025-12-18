const db = require("../config/db");

const {getAllElements} = require("./commonController");

const getAllTrainers = getAllElements("trainer");
const getTrainerById = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await db.query(
            "SELECT * FROM trainer WHERE id = $1",
            [id]
        );
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

const createTrainer = async (req, res) => {
    try {
        const {
            trainer_id,
            full_name,
            specialization,
            phone_number,
            hire_date
        } = req.body;
        const result = await db.query(
            "INSERT INTO trainer (trainer_id, full_name, specialization, phone_number, hire_date) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [trainer_id, full_name, specialization, phone_number, hire_date]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

const updateTrainer = async (req, res) => {
    try {
        const {
            id,
            trainer_id,
            full_name,
            specialization,
            phone_number,
            hire_date
        } = req.body;
        const result = await db.query(
            "UPDATE trainer SET trainer_id = $2, full_name = $3, specialization = $4, phone_number = $5, hire_date = $6 WHERE id = $1 RETURNING *",
            [id, trainer_id, full_name, specialization, phone_number, hire_date]
        );
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

const deleteTrainer = async (req, res) => {
    try {
        const {id} = req.body;
        const result = await db.query(
            "DELETE FROM trainer WHERE id = $1 RETURNING *",
            [id]
        );
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

module.exports = {getAllTrainers, getTrainerById, createTrainer, updateTrainer, deleteTrainer};