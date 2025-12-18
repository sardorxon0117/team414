const db = require("../config/db");
const {getAllElements} = require("./commonController");

const getAllTrainers = getAllElements("trainer");

module.exports = {getAllTrainers};