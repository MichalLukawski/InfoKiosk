import { useState, useEffect } from "react";
import ChartView from "./ChartView";

const StatsPage = () => {
  const [authorized, setAuthorized] = useState(false);
  const [input, setInput] = useState("");

  const password = "wat1950"; // 🧠 zmień lub ukryj lepiej

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === password) setAuthorized(true);
  };

  return authorized ? (
    <ChartView />
  ) : (
    <form onSubmit={handleSubmit} style={{ marginTop: "100px", textAlign: "center" }}>
      <h2>Podaj hasło</h2>
      <input type="password" value={input} onChange={e => setInput(e.target.value)} />
      <button type="submit">Zaloguj</button>
    </form>
  );
};

export default StatsPage;
