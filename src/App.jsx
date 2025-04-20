import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";

function App() {
  const [expenses, setExpenses] = useState([
    // Example initial expense
    { id: 1, description: "Coffee", category: "Food", amount: 3.5 },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  // Add a new expense
  function handleAddExpense(expense) {
    setExpenses((prev) => [expense, ...prev]);
  }

  // Update search term
  function handleSearch(term) {
    setSearchTerm(term);
  }

  // Filter expenses by description or category
  const filteredExpenses = expenses.filter(({ description, category }) =>
    [description, category].some((field) =>
      field.toLowerCase().includes(searchTerm.toLowerCase())
    )
  ); // filter() creates a new array based on a test function :contentReference[oaicite:3]{index=3}

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <SearchBar onSearch={handleSearch} />
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseTable expenses={filteredExpenses} />
    </div>
  );
}

export default App;
