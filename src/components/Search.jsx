import { useContext } from "react";
import { AppContext } from "../context/Context";

function Search() {
	const { data } = useContext(AppContext);

	const onChange = (value) => {
		console.log("onChange: ", value);
	};
	const onChangeComplete = (value) => {
		console.log("onChangeComplete: ", value);
	};

	console.log(data);
	return (
		<div className="row">
			<input placeholder="Search for a dinosuar..." type="text" className='col-md-2'></input>
			<button className='col-md-1'>Search</button>
		</div>
	);
}
export default Search;
