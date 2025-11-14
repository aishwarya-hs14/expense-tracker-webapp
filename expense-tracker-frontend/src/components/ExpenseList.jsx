import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import "../styles/dashboard.css";

export default function ExpenseList() {
  const [expenses, setExpenses] = useState([]);
  const navigate = useNavigate();

  const loadExpenses = async () => {
    const res = await API.get("/expenses");
    setExpenses(res.data);
  };

  useEffect(() => {
    loadExpenses();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Delete this expense?")) {
      await API.delete(`/expenses/${id}`);
      loadExpenses();
    }
  };

  const handleEdit = (id) => navigate(`/edit/${id}`);

  return (
    <div className="dashboard">
      <h2>Your Expenses</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((e) => (
            <tr key={e.id}>
              <td>{e.title}</td>
              <td>{e.category}</td>
              <td>₹{e.amount}</td>
              <td>{e.date}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(e.id)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(e.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
