import "./App.css";
import "./styles/Charts.css";
import "./styles/Map.css";
import "./styles/LoadingPage.css";
import "./styles/DinosaurNews.css";
import "./styles/Search.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { data, data2 } from "./data";
import PieChart from "./components/PieChart";
import DonutChart from "./components/DonutChart";
import { AppProvider } from "./context/Context";
import Search from "./components/Search";
import Map from "./components/Map";
import List from './components/List'
import DinosaurDisplay from "./components/DinosaurDisplay";
import DinosaurNews from "./components/DinosaurNews";
import Footer from "./components/Footer";
import DinasourDetails from "./components/DinasourDetails";
import Navbar from "./components/Navbar";

function App() {
  return (
    <AppProvider>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Navbar />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12" id="searchBar">
            <Search />
          </div>
        </div>
        <div className="row d-flex">
          <div className="col-md-8 mt-4" id="map-container"> 
            {/* <div className="headerText">
				      <h6 className="display-12 text-uppercase w-50 mx-1 text-center py-1">
					      dinosaur lists
				      </h6>
			      </div> */}
            <Map />
            {/* <div id="mapBorderTop"></div> */}
          </div>
        </div>

        <div className="row mt-4 position-relative">
					<div className="col-md-4">
						<div className="pie-chart">
							<PieChart data={data} />
							<div className="borderTop"></div>
						</div>
					</div>

					<div className="col-md-4 mt-md-0 mt-4">
						<div className="donut-chart">
							<DonutChart data={data2} />
							<div className="borderTop"></div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="dinasourList">
							<List />
							<div id="dinasourListBorderTop"></div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<DinosaurNews />
					</div>
				</div>

				<div className="row">
					<div className="col-md-12">
						<DinasourDetails />
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
