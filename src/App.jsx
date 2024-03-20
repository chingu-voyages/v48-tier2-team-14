import "./App.css";
import "./styles/Charts.css";
import "./styles/LoadingPage.css";
import "./styles/Map.css";
import "./styles/DinosaurNews.css";
import "./styles/Search.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import { data, data2 } from "./data";
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
			<h1>Dino Studio</h1>
			{/* <DinosaurNews /> */}
			<Search />
			{/* <Map
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
      <div className="pie-chart">
        <PieChart />
      </div>
      <div className="donut-chart">
        <DonutChart />
      </div>
      <DinosaurDisplay /> 
      <Footer /> */}
		</AppProvider>
	);
}

export default App;
