import "./App.css";
import MyResponsivePieCanvas from "./components/MyResponsivePieCanvas";
import "./styles/PieChart.css";
import data from "./data";
import { useEffect } from "react";
import PieChart from "./components/PieChart";

function App() {
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <>
      <h1>Chingu Voyage 48: Tier 2 Team 14</h1>
      <div className="pie-chart">
        <PieChart data={data} />
      </div>
      {/* <MyResponsivePieCanvas data={data} />  */}
    </>
  );
}

export default App;
