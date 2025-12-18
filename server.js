const express = require("express");
const app = express();

app.use(express.json());

const customerRoutes = require("./routes/customerRoutes");
const trainerRoutes = require("./routes/trainerRoutes");
const subscriptionRoutes = require("./routes/subscriptionRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const tariffRoutes = require("./routes/tariffRoutes");

app.use("/", customerRoutes);
app.use("/", trainerRoutes);
app.use("/", subscriptionRoutes);
app.use("/", paymentRoutes);
app.use("/", tariffRoutes);

app.listen(5000, () => {
    console.log("server is running");
});
