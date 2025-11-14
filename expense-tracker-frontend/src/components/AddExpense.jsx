import { useState } from "react";
import API from "../api";
import "../styles/form.css";

export default function AddExpense() {
  const [expense, setExpense] = useState({
    title: "", category: "", amount: "", date: "", description: ""
  });

  const handleChange = (e) =>
    setExpense({ ...expense, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/expenses", expense);
    alert("Expense added!");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Add Expense</h2>
        <input name="title" placeholder="Title" onChange={handleChange} required />
        <input name="category" placeholder="Category" onChange={handleChange} required />
        <input name="amount" type="number" placeholder="Amount" onChange={handleChange} required />
        <input name="date" type="date" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
