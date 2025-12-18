const db = require("../config/db");
const {getAllElements} = require("./commonController");

const getAllSubscriptions = getAllElements("tariff");

module.exports = {getAllSubscriptions};