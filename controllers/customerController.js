const db = require("../config/db");
const {getAllElements} = require("./commonController");

const getAllCustomers = getAllElements("customer");
const createCustomer = async (req, res) => {
    try {
        const {full_name, phone_number, gender, date_of_birth, join_date} = req.body;
        const result = await db.query(
            "INSERT INTO customer (full_name, phone_number, gender, date_of_birth, join_date) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [full_name, phone_number, gender, date_of_birth, join_date]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json(err.message);
    }
};

const deleteCustomer = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await db.query(
            "DELETE FROM customer WHERE customer_id = $1 RETURNING *",
            [id]
        );
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json(err.message);
    }
};

const getCustomerById = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await db.query(
            "SELECT * FROM customer WHERE customer_id = $1",
            [id]
        );
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json(err.message);
    }
};

const updateCustomer = async (req, res) => {
    try {
        const {id} = req.params;
        const {full_name, phone_number, gender, date_of_birth, join_date} = req.body;
        const result = await db.query(
            "UPDATE customer SET full_name = $2, phone_number = $3, gender = $4, date_of_birth = $5, join_date = $6 WHERE customer_id = $1 RETURNING *",
            [id, full_name, phone_number, gender, date_of_birth, join_date]
        );
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json(err.message);
    }
};
module.exports = {getAllCustomers, createCustomer, deleteCustomer, getCustomerById, updateCustomer};