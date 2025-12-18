const express = require("express");
const router = express.Router();

const {getAllSubscriptions} = require("../controllers/subscriptionController");

router.get("/subscriptions", getAllSubscriptions);

module.exports = router;
