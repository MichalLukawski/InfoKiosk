import { useState } from "react";
import ChartView from "./ChartView";

const password = "1950"; // ← zmień wg potrzeby

const StatsPage = () => {
  const [authorized, setAuthorized] = useState(false);
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => setInput("");
  const handleSubmit = () => {
    if (input === password) setAuthorized(true);
  };

  if (authorized) return <ChartView />;

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h2>Podaj hasło</h2>
      <input
        type="password"
        value={input}
        readOnly
        style={{ fontSize: "24px", textAlign: "center", marginBottom: "20px" }}
      />
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", maxWidth: "300px", margin: "auto" }}>
        {[1,2,3,4,5,6,7,8,9,0].map((num) => (
          <button
            key={num}
            onClick={() => handleClick(num.toString())}
            style={{ width: "60px", height: "60px", margin: "5px", fontSize: "20px" }}
          >
            {num}
          </button>
        ))}
        <button onClick={handleClear} style={{ width: "130px", margin: "5px", fontSize: "16px" }}>Wyczyść</button>
        <button onClick={handleSubmit} style={{ width: "130px", margin: "5px", fontSize: "16px" }}>Zaloguj</button>
      </div>
    </div>
  );
};

export default StatsPage;
