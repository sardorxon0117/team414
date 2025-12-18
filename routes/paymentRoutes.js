const express = require("express");
const router = express.Router();

const {
    getAllPayments,
    deletePayment,
    updatePayment,
    createPayment,
    getPaymentById
} = require("../controllers/paymentController");

router.get("/payments", getAllPayments);

router.get("/payments/:id", getPaymentById);

router.post("/payments", createPayment);

router.put("/payments/:id", updatePayment);

router.delete("/payments/:id", deletePayment);

module.exports = router;
