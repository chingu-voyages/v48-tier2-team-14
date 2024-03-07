import './App.css';
import { AppProvider } from './context/Context';
import Search from './components/Search';
import Map from './components/Map';
import DinosaurDisplay from './components/DinosaurDisplay';
import Chart from './components/Chart'

function App() {

  return (
    <AppProvider>
      <h1>Chingu Voyage 48: Tier 2 Team 14</h1>
      <Search />
      <Map />
      <DinosaurDisplay />
      <Chart />
    </AppProvider>
  )
}

export default App
