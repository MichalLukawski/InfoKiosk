import { useEffect, useState } from "react";

const ChartView = () => {
  const [pageStats, setPageStats] = useState([]);
  const [monthlyTotals, setMonthlyTotals] = useState([]);
  const [yearlyTotals, setYearlyTotals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/clicks-summary")
      .then(res => res.json())
      .then(setPageStats);

    fetch("http://localhost:4000/api/clicks-summary-total")
      .then(res => res.json())
      .then(setMonthlyTotals);

    fetch("http://localhost:4000/api/clicks-summary-yearly")
      .then(res => res.json())
      .then(setYearlyTotals);
  }, []);

  // 🧮 Wyciągnij bieżący i poprzedni miesiąc
  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();

  const previousMonth = currentMonth === 1 ? 12 : currentMonth - 1;
  const previousYear = currentMonth === 1 ? currentYear - 1 : currentYear;

  const filteredPageStats = pageStats
    .filter(row =>
      (row._id.year === currentYear && row._id.month === currentMonth) ||
      (row._id.year === previousYear && row._id.month === previousMonth)
    )
    .sort((a, b) => {
      // Najnowsze na górze
      if (a._id.year !== b._id.year) return b._id.year - a._id.year;
      return b._id.month - a._id.month;
    });

  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      gap: "40px",
      padding: "40px",
      alignItems: "flex-start",
      maxWidth: "1200px",
      margin: "0 auto"
    }}>
      {/* Lewa kolumna */}
      <div style={{ flex: 0.4 }}>
        <h2>📄 Kliknięcia wg podstrony</h2>
        <table border="1" cellPadding="6" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Podstrona</th>
              <th>Rok</th>
              <th>Miesiąc</th>
              <th>Kliknięcia</th>
            </tr>
          </thead>
          <tbody>
            {filteredPageStats.map((row, i) => (
              <tr key={i}>
                <td>{row._id.page}</td>
                <td>{row._id.year}</td>
                <td>{row._id.month}</td>
                <td>{row.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Prawa kolumna */}
      <div style={{
        flex: 0.6,
        maxHeight: "80vh", // ograniczamy wysokość
        overflowY: "auto"   // dodajemy scroll jeśli trzeba
      }}>
        <h2>📆 Podsumowanie miesięczne</h2>
        <table border="1" cellPadding="6" style={{ width: "100%", marginBottom: "40px" }}>
          <thead>
            <tr>
              <th>Rok</th>
              <th>Miesiąc</th>
              <th>Łączna liczba kliknięć</th>
            </tr>
          </thead>
          <tbody>
            {[...monthlyTotals]
              .sort((a, b) => {
                if (a._id.year !== b._id.year) return b._id.year - a._id.year;
                return b._id.month - a._id.month;
              })
              .map((row, i) => (
                <tr key={i}>
                  <td>{row._id.year}</td>
                  <td>{row._id.month}</td>
                  <td>{row.total}</td>
                </tr>
              ))}
          </tbody>
        </table>

        <h2>📅 Podsumowanie roczne</h2>
        <table border="1" cellPadding="6" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Rok</th>
              <th>Łączna liczba kliknięć</th>
            </tr>
          </thead>
          <tbody>
            {[...yearlyTotals]
              .sort((a, b) => b._id.year - a._id.year)
              .map((row, i) => (
                <tr key={i}>
                  <td>{row._id.year}</td>
                  <td>{row.total}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChartView;
