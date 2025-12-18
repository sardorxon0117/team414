const express = require("express");
const app = express();

app.use(express.json());

const db = require("./config/db");
app.listen(5000, () => {
    console.log("server is running");
});
