
import "./App.css";
import "./styles/Charts.css";
import { data, data2 } from "./data";
import { useEffect } from "react";
import PieChart from "./components/PieChart";
import DonutChart from "./components/DonutChart";
import { AppProvider } from './context/Context';
import Search from './components/Search';
import Map from './components/Map';
import DinosaurDisplay from './components/DinosaurDisplay';


function App() {
    return (
		<AppProvider>
			<Search />
			<h1>Chingu Voyage 48: Tier 2 Team 14</h1>
			<div className="pie-chart">
				<PieChart data={data} />
			</div>
			<div className="donut-chart">
				<DonutChart data={data2} />
			</div>
			<Map />
			<DinosaurDisplay />
		</AppProvider>
	);

}

export default App;
