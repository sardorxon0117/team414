const express = require("express");
const router = express.Router();

const {
    getAllSubscriptions,
    createSubscription,
    deleteSubscription,
    updateSubscription,
    getSubscriptionById
} = require("../controllers/subscriptionController");

router.get("/subscriptions", getAllSubscriptions);

router.get("/subscriptions/:id", getSubscriptionById);

router.post("/subscriptions", createSubscription);

router.put("/subscriptions/:id", updateSubscription);

router.delete("/subscriptions/:id", deleteSubscription);

module.exports = router;
