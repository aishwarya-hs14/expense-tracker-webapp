const [month, setMonth] = useState(new Date().getMonth() + 1);
const [year, setYear] = useState(new Date().getFullYear());
const [total, setTotal] = useState(0);

const fetchSummary = async () => {
  try {
    const response = await API.get(`/expenses/summary?month=${month}&year=${year}`);
    setTotal(response.data.total);
  } catch (err) {
    console.error(err);
    alert("Failed to fetch summary");
  }
};

return (
  <div className="summary-container">
    <h2>Monthly Summary</h2>
    <input type="number" value={month} onChange={(e) => setMonth(e.target.value)} />
    <input type="number" value={year} onChange={(e) => setYear(e.target.value)} />
    <button onClick={fetchSummary}>Update</button>

    <h3>Total Expenses: ₹{total}</h3>
  </div>
);
