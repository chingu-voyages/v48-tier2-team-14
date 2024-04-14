import "./App.css";
import "./styles/Charts.css";
import "./styles/Map.css";
import "./styles/LoadingPage.css";
import "./styles/DinosaurNews.css";
import "./styles/Search.css";
import "./styles/Navbar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import PieChart from "./components/PieChart";
import DonutChart from "./components/DonutChart";
import { AppProvider } from "./context/Context";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Map from "./components/Map";
import List from "./components/List";
import DinosaurDisplay from "./components/DinosaurDisplay";
import DinosaurNews from "./components/DinosaurNews";
import Footer from "./components/Footer";
import DinasourDetails from "./components/DinasourDetails";

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
          <div className="col-md-12">
            <Search />
          </div>
        </div>
        <div className="row d-flex">
          <div className="col-md-8 mt-5" id="map-container">
            <Map />
          </div>
        </div>

        <div className="row mt-4 position-relative">
          <div className="col-md-4 mt-md-0 mt-4 pt-md-2">
            <div className="pie-chart">
              <PieChart />
              <div className="borderTop"></div>
            </div>
          </div>

          <div className="col-md-4 mt-md-0 mt-5 pt-md-2">
            <div className="donut-chart">
              <DonutChart />
              <div className="borderTop"></div>
            </div>
          </div>

          <div className="col-md-4 mt-md-0 mt-4 mb-md-0 mb-4">
            <div className="dinasourList">
              <List />
              <div id="dinasourListBorderTop"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <DinasourDetails />
          </div>
        </div>
      </div>

      <div className="col-md-12">
        <DinosaurNews />
      </div>

      <div>
        <footer className="footer" id="footer">
          <Footer />
        </footer>
      </div>
    </AppProvider>
  );
}

export default App;
