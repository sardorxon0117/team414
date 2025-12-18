const db = require("../config/db");
const {getAllElements} = require("./commonController");

const getAllTariff = getAllElements("tariff");

module.exports = {getAllTariff};