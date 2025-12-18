const {getAllElements} = require("./commonController");

const getAllTariff = getAllElements("tariff");

const createTariff = async (req, res) => {
    try {
        const {name, duration_months, price, description} = req.body;
        const result = await pool.query(
            "INSERT INTO tariff (name, duration_months, price, description) VALUES ($1, $2, $3, $4) RETURNING *",
            [name, duration_months, price, description]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

const deleteTariff = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await pool.query(
            "DELETE FROM tariff WHERE tariff_id = $1 RETURNING *",
            [id]
        );
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

const updateTariff = async (req, res) => {
    try {
        const {id} = req.params;
        const {name, duration_months, price, description} = req.body;
        const result = await pool.query(
            "UPDATE tariff SET name = $2, duration_months = $3, price = $4, description = $5 WHERE tariff_id = $1 RETURNING *",
            [id, name, duration_months, price, description]
        );
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

const getTariffById = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await pool.query(
            "SELECT * FROM tariff WHERE tariff_id = $1",
            [id]
        );
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

module.exports = {getAllTariff, createTariff, deleteTariff, updateTariff, getTariffById};