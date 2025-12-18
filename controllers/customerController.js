const db = require("../config/db");
const {getAllElements} = require("./commonController");

const getAllCustomers = getAllElements("customer");

module.exports = {getAllCustomers};