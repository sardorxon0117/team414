const pool = require("../config/db");

const getAllElements = (table) => {
    return async (req, res) => {
        try {
            const result = await pool.query(`SELECT *
                                             FROM ${table}`);
            res.status(200).json(result.rows);
        } catch (err) {
            res.status(500).json(err.message);
        }
    };
};

module.exports = {getAllElements};
