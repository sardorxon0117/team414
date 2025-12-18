const db = require("../config/db");
const {getAllElements} = require("./commonController");

const getAllPayments = getAllElements("tariff");

module.exports = {getAllPayments};