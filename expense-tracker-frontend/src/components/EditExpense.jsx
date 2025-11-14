import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../api";
import "../styles/form.css";

export default function EditExpense() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [expense, setExpense] = useState({
    title: "", category: "", amount: "", date: "", description: ""
  });

  useEffect(() => {
    API.get(`/expenses/${id}`).then((res) => setExpense(res.data));
  }, [id]);

  const handleChange = (e) =>
    setExpense({ ...expense, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.put(`/expenses/${id}`, expense);
    alert("Expense updated!");
    navigate("/dashboard");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Edit Expense</h2>
        <input name="title" value={expense.title} onChange={handleChange} required />
        <input name="category" value={expense.category} onChange={handleChange} required />
        <input name="amount" type="number" value={expense.amount} onChange={handleChange} required />
        <input name="date" type="date" value={expense.date} onChange={handleChange} required />
        <textarea name="description" value={expense.description} onChange={handleChange}></textarea>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
