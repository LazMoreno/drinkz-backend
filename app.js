const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

require("dotenv").config();

//db connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to DB..."))
  .catch(() => console.log("Couldn't connect to db..."));

//middleware connection
app.use(express.json());
app.use(cors());

//routes
app.use("/api/v1/expenses", require("./routes/expense"));

//port & listening
const port = process.env.PORT;
app.listen(port, () => console.log("Server running..."));
