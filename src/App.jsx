import "./App.css";
import "./styles/Charts.css";
import "./styles/Map.css";
import "./styles/LoadingPage.css";
import "./styles/DinosaurNews.css";
import "./styles/Search.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import { data, data2 } from "./data";
//import { useEffect } from "react";
import PieChart from "./components/PieChart";
import DonutChart from "./components/DonutChart";
import { AppProvider } from "./context/Context";
import DinosaurNews from "./components/DinosaurNews";
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
						<h1 className="display-6">Dino Studio</h1>
					</div>
					<div className="col-md-4"></div>
				</div>
				<div className="row">
					<div className="col-md-11" id="searchBar">
						<Search />
					</div>
				</div>
				<div className="row d-flex overflow-hidden">
					<div className="col-md-8">
						<Map
							selectedDinosaur={{
								id: 24,
								name: "Antarctosaurus",
								imageSrc:
									"https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/antarcto.jpg",
								typeOfDinosaur: "sauropod",
								length: 18,
								weight: "N/A",
								diet: "herbivorous",
								whenLived: "Late Cretaceous, 84 million years ago",
								foundIn: "Argentina, Chile, Uruguay",
								taxonomy:
									"Dinosauria, Saurischia, Sauropodomorpha, Sauropoda, Eusauropoda, Neosauropoda, Macronaria, Camarasauromorpha, Titanosauriformes, Titanosauria, Lithostrotia",
								namedBy: "von Huene (1929)",
								typeSpecies: "wichmannianus",
								description: "N/A",
							}}
						/>
					</div>

					<div className="col-md-4">
						<div className="mb-3">
							<div className="pie-chart">
								<PieChart data={data} />
							</div>
						</div>

						<div>
							<div className="donut-chart">
								<DonutChart data={data2} />
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-md-12">
						{/* <DinosaurDisplay /> */}
						<DinosaurNews />
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
