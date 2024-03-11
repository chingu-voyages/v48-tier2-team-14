import "./App.css";
import "./styles/Charts.css";
import "./styles/LoadingPage.css";
import { data, data2 } from "./data";
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
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-8">
						<h1 className="display-1">Dino Studio</h1>
					</div>
					<div className="col-md-4"></div>
				</div>
				<div className="row">
					<div className="col-md-12" id="searchBar">
						<Search />
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<Map />
					</div>
				</div>
				<div className="row">
					<div className="col-md-1"></div>
					<div className="col-md-4">
						<div className="pie-chart">
							<PieChart data={data} />
						</div>
					</div>
					<div className="col-md-6">
						<div className="donut-chart">
							<DonutChart data={data2} />
						</div>
					</div>
					<div className="col-md-1"></div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<DinosaurDisplay />
					</div>
				</div>
			</div>
			<div className="container">
				<footer className="footer">
					<Footer />
				</footer>
			</div>
		</AppProvider>
	);
}

export default App;
