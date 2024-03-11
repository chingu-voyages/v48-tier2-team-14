import "./App.css";
import "./styles/Charts.css";
import "./styles/LoadingPage.css"
//import { data1, data2 } from "./data";
//import { useEffect } from "react";
import PieChart from "./components/PieChart";
import DonutChart from "./components/DonutChart";
import { AppProvider } from "./context/Context";
import Search from "./components/Search";
import Map from "./components/Map";
import DinosaurDisplay from "./components/DinosaurDisplay";
import Footer from "./components/Footer";

function App() {
	return (
		<AppProvider>
			<h1>Chingu Voyage 48: Tier 2 Team 14</h1>
			<Search />
			<Map />
			<div className="pie-chart">
				<PieChart />
			</div>
			<div className="donut-chart">
				<DonutChart />
			</div>
			<DinosaurDisplay />
			<Footer />
		</AppProvider>
	);
}

export default App;
