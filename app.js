const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

//db connection
mongoose
  .connect("mongodb://localhost/drinkz")
  .then(() => console.log("Connected to DB..."))
  .catch(() => console.log("Couldn't connect to db..."));

//middleware connection
app.use(express.json());
app.use(cors());

//routes
app.get("/", (req, res) => {
  return res.json({ drink: "margarita" });
});

//port & listening
const port = 5000;
app.listen(port, () => console.log("Server running..."));
