const express = require("express");
const router = express.Router();
// const cloudinary = require("cloudinary").v2;`

const Expense = require("../models/Expense");

// GET
router.get("/", async (req, res) => {
  const expenses = await Expense.find();
  try {
    if (expenses.length === 0) {
      return res.status(400).json({ message: "Expenses not found" });
    }
    return res.status(200).json(expenses);
  } catch (error) {
    return res.status(500).json({ message: "Couldn't retrieve expenses" });
  }
});

// GET/byId
router.get("/expense/:id", async (req, res) => {
  const { id } = req.params;
  const expense = await Expense.findById(id);
  try {
    return res.status(200).json(expense);
  } catch (error) {
    return res.status(500).json({ message: "Couldn't get the expense" });
  }
});

// POST
router.post("/expense", async (req, res) => {
  const expenseToCreate = await Expense.create(req.body);
  try {
    return res.status(201).json(expenseToCreate);
  } catch (error) {
    return res.status(500).json({message: "Couldn't create the expense"})
  }
});

// PUT
router.put("/expense/:id", async (req, res) => {
  const { id } = req.params;
  const expenseToUpdate = await Expense.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  try {
    return res.status(202).json(expenseToUpdate);
  } catch (error) {}
});

// DELETE
router.delete("/expense/:id", async (req, res) => {
  const { id } = req.params;
  await Expense.findByIdAndDelete(id);
  try {
    return res.status(203).json({ message: "Deleted sucessfully" });
  } catch (error) {
    return res.status(500).json({ message: "Couldn't delete the expense" });
  }
});

module.exports = router;
