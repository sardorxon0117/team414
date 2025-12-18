const db = require("../config/db");
const {getAllElements} = require("./commonController");

const getAllCustomers = getAllElements("customer");

exports.getCustomer = async(req,res) =>{
  try {
    const {id} = req.params
    const result = await pool.query("select * from customer where id = $1",{id})
    res.status(200).json(result.rows[0])
  } catch (error) {
    console.log(error);
  }
}

exports.deleteCustomer = async(req,res) => {
   try {
        const {id} = req.body;
        const result = await db.query(
            "DELETE FROM customer WHERE id = $1 RETURNING *",
            [id]
        );
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

exports.putCustomer = async(req,res) =>{
  
}
module.exports = {getAllCustomers};