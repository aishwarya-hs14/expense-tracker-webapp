import { useState, useEffect } from "react";
import API from "../api";
import "../styles/summary.css";

export default function Summary() {
  const [summary, setSummary] = useState({});
  const [month, setMonth] = useState(11);
  const [year, setYear] = useState(2025);

  useEffect(() => {
    loadSummary();
  }, []);

  const loadSummary = async () => {
    const res = await API.get(`/expenses/summary?month=${month}&year=${year}`);
    setSummary(res.data);
  };

  return (
    <div className="summary-container">
      <h2>Monthly Summary</h2>
      <div className="filter">
        <input type="number" value={month} onChange={(e) => setMonth(e.target.value)} placeholder="Month" />
        <input type="number" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Year" />
        <button onClick={loadSummary}>Update</button>
      </div>
      <div className="summary-card">
        <p><strong>Total:</strong> ₹{summary.totalExpenses}</p>
        <p><strong>Expenses:</strong> {summary.numberOfExpenses}</p>
        <p><strong>Average:</strong> ₹{summary.averageExpense}</p>
      </div>
    </div>
  );
}
