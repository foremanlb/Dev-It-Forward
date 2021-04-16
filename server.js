const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const db = require("./db");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 4567
//Middleware
app.use(cors());
app.use(express.jason());
app.use(logger("dev"));
//
app.use()

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));