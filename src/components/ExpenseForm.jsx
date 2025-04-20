import React, { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!description || !category || !amount) return;
    onAddExpense({
      id: Date.now(),
      description,
      category,
      amount: parseFloat(amount),
    });
    setDescription("");
    setCategory("");
    setAmount("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
