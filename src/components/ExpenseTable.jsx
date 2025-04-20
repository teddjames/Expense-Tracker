import React from "react";

function ExpenseTable({ expenses }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((exp) => (
          <tr key={exp.id}>
            <td>{exp.description}</td>
            <td>{exp.category}</td>
            <td>${exp.amount.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
