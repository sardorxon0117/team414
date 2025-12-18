const db = require("../config/db");
const {getAllElements} = require("./commonController");

const getAllPayments = getAllElements("payment");

const createPayment = async (req, res) => {
    try {
        const {customer_id, subscription_id, amount, payment_date, payment_method} = req.body;
        const result = await db.query(
            "INSERT INTO payment (customer_id, subscription_id, amount, payment_date, payment_method) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [customer_id, subscription_id, amount, payment_date, payment_method]
        );
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

const getPaymentById = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await db.query(
            "SELECT * FROM payment WHERE payment_id = $1",
            [id]
        );
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

const updatePayment = async (req, res) => {
    try {
        const {id} = req.params;
        const {customer_id, subscription_id, amount, payment_date, payment_method} = req.body;
        const result = await db.query(
            "UPDATE payment SET customer_id = $2, subscription_id = $3, amount = $4, payment_date = $5, payment_method = $6 WHERE payment_id = $1 RETURNING *",
            [id, customer_id, subscription_id, amount, payment_date, payment_method]
        );
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

const deletePayment = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await db.query(
            "DELETE FROM payment WHERE payment_id = $1 RETURNING *",
            [id]
        );
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

module.exports = {getAllPayments, createPayment, getPaymentById, updatePayment, deletePayment};
