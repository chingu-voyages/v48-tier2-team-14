import { useContext, useState } from "react";
import { AppContext } from "../context/Context";

function Search() {
	const { data, searchDinosaurs, searchObj } = useContext(AppContext);
	const [name, setName] = useState();
	
	const handleChange = (event) => {
		setName(event.target.value);
		searchObj.name = name;
	};

	const handleSubmit = () => {
		console.log(name);
		searchDinosaurs(searchObj);
	}

	// console.log(data);
	return (
		<div className="row">
			<input placeholder="Search for a dinosuar..." type="text" className='col-md-2' onChange={handleChange}></input>
			<button className='col-md-1' onClick={handleSubmit}>Search</button>
		</div>
	);
}
export default Search;
