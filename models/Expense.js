const { model, Schema } = require("mongoose");

const ExpenseSchema = Schema({
  item: { type: String, required: true, trim: true },
  date: { type: String, required: true, trim: true },
  amount: { type: Number, required: true },
});

module.exports = model("Expense", ExpenseSchema);
