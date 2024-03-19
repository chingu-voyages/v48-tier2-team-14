import { useContext } from "react";
import { AppContext } from "../context/Context";

function Search() {
  const { data } = useContext(AppContext);
  
  const minWeight = 0;
  const maxWeight = 100;

  const handleRangeChange = () => {

  }
	console.log(data);
	return (
		<>
			<input placeholder="Search for a dinosuar..." type="text"></input>

			<button>Search</button>

		</>
	);
}
export default Search;
