const db = require("../config/db");
const {getAllElements} = require("./commonController");

const getAllSubscriptions = getAllElements("subscription");

const createSubscription = async (req, res) => {
    try {
        const {
            customer_id,
            trainer_id,
            tariff_id,
            start_date,
            end_date,
        } = req.body;
        const result = await db.query(
            "INSERT INTO subscription (customer_id, trainer_id, tariff_id, start_date, end_date) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [customer_id, trainer_id, tariff_id, start_date, end_date]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

const updateSubscription = async (req, res) => {
    try {
        const {
            id,
            customer_id,
            trainer_id,
            tariff_id,
            start_date,
            end_date,
        } = req.body;
        const result = await db.query(
            "UPDATE subscription SET customer_id = $2, trainer_id = $3, tariff_id = $4, start_date = $5, end_date = $6 WHERE id = $1 RETURNING *",
            [id, customer_id, trainer_id, tariff_id, start_date, end_date]
        );
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

const deleteSubscription = async (req, res) => {
    try {
        const {id} = req.body;
        const result = await db.query(
            "DELETE FROM subscription WHERE id = $1 RETURNING *",
            [id]
        );
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

const getSubscriptionById = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await db.query(
            "SELECT * FROM subscription WHERE id = $1",
            [id]
        );
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

module.exports = {getAllSubscriptions, createSubscription, updateSubscription, deleteSubscription, getSubscriptionById};